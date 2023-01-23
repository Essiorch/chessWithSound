import  { nanoid } from 'nanoid';
import React, { useState } from 'react';
import '../App.css';

import backgroundImage from '../resources/chessDesk.jpg';
import Element from './Element';
import whiteDesk from '../resources/Доска1.png'
import blackDesk from '../resources/Доска2.png'
import finishDesk from '../resources/Доска4.png'

import pawnAudio from '../resources/звукПешкиИКороля.mp3'
import rookAudio from '../resources/труба.mp3'
import knightAudio from '../resources/ржаниеЛошади.mp3'
import bishopAudio from '../resources/епископ.mp3'
import queeenAudio from '../resources/шепот.mp3'
import finishAudio from '../resources/победа.mp3'

let pawnaudio = new Audio(pawnAudio);
let rookaudio = new Audio(rookAudio);
let knightaudio = new Audio(knightAudio);
let bishopaudio = new Audio(bishopAudio);
let queenaudio = new Audio(queeenAudio);
let finishaudio = new Audio(finishAudio);

function Chess() {
	let array = [ 
		{X: 102, Y: 531, Flag: true}, {X: 181, Y: 531, Flag: true},
		{X: 258, Y: 531, Flag: true}, {X: 334, Y: 531, Flag: true},
		{X: 412, Y: 531, Flag: true}, {X: 487, Y: 531, Flag: true},
		{X: 562, Y: 531, Flag: true}, {X: 640, Y: 531, Flag: true},
		{X: 102, Y: 607, Flag: true}, {X: 181, Y: 607, Flag: true}, 
		{X: 258, Y: 607, Flag: true}, {X: 334, Y: 607, Flag: true},
		{X: 412, Y: 607, Flag: true}, {X: 487, Y: 607, Flag: true},
		{X: 562, Y: 607, Flag: true}, {X: 640, Y: 607, Flag: true},
		{X: 102, Y: 146, Flag: true}, {X: 181, Y: 146, Flag: true}, 
		{X: 258, Y: 146, Flag: true}, {X: 334, Y: 146, Flag: true},
		{X: 412, Y: 146, Flag: true}, {X: 487, Y: 146, Flag: true},
		{X: 562, Y: 146, Flag: true}, {X: 640, Y: 146, Flag: true},
		{X: 102, Y: 69, Flag: true}, {X: 181, Y: 69, Flag: true},
		{X: 258, Y: 69, Flag: true}, {X: 334, Y: 69, Flag: true},
		{X: 412, Y: 69, Flag: true}, {X: 487, Y: 69, Flag: true},
		{X: 562, Y: 69, Flag: true}, {X: 640, Y: 69, Flag: true}	
	];
	
	const [notes, setNotes] = useState(array);
	const [color, setColor] = useState(true);
	
	const arrayX = [102, 181, 258, 334, 412, 487, 562, 640];
	const arrayY = [69, 146, 223, 300, 377, 452, 531, 607];
	
	const whitePlace = [...notes.slice(0, 16)];
	const blackPlace = [...notes.slice(16)];
	
	let gameOver = false;
	let finish;
	let p1 = summ(blackPlace, whitePlace, 607);
	let p2 = summ(whitePlace, blackPlace, 69);
		
	if (notes[11].Flag == false || notes[27].Flag == false) {
		gameOver = true;
		finishaudio.play();
		let colorText;
		if (p1>p2) {
			colorText = 'black';
		}
		if (p1<p2) {
			colorText = 'white';
		}
		if (p1 == p2) {
			colorText = notes[11].Flag == false ? 'black' : 'white';
		}
		
		finish = <p style={{position: 'absolute', left: 807, top: 450, width: 300, 
		fontWeight: 'bold', color: colorText, fontSize: 40}}>{colorText} won!</p>
	}

	let array1 = notes;
	let array2 = array1.map( function (item, index) {
		if (item.X != '') {
			let figure;
			let figureColor;
			let leftIndent = 0;
			let topIndent = 0;
			let audio;
			if (index >= 0 && index <= 7) {
				figure = 'pawnWhite';
				figureColor = true;
				leftIndent = 18;
				topIndent = 3;
				audio = pawnaudio;
			}
			if (index == 8 || index == 15) {
				figure = 'rookWhite';
				figureColor = true;
				leftIndent = 15;
				audio = rookaudio;
				
			}
			if (index == 9 || index == 14) {
				figure = 'knightWhite';
				figureColor = true;
				leftIndent = 14;
				audio = knightaudio;
				
			}
			if (index == 10 || index == 13) {
				figure = 'bishopWhite';
				figureColor = true;
				leftIndent = 14;
				topIndent = 3;
				audio = bishopaudio;
				
			}
			if (index == 12) {
				figure = 'queeenWhite';
				figureColor = true;
				leftIndent = 14;
				topIndent = 3;
				audio = queenaudio;
				
			}
			if (index == 11) {
				figure = 'kingWhite';
				figureColor = true;
				leftIndent = 14;
				topIndent = 3;
				audio = pawnaudio;
				
			}
			if (index >= 16 && index <= 23) {
				figure = 'pawnBlack';
				figureColor = false;
				leftIndent = 18;
				audio = pawnaudio;
			}
			if (index == 24 || index == 31) {
				figure = 'rookBlack';
				figureColor = false;
				leftIndent = 15;
				audio = rookaudio;
				
			}
			if (index == 25 || index == 30) {
				figure = 'knightBlack';
				figureColor = false;
				leftIndent = 14;
				audio = knightaudio;
				
			}
			if (index == 26 || index == 29) {
				figure = 'bishopBlack';
				figureColor = false;
				leftIndent = 14;
				topIndent = 2;
				audio = bishopaudio;
				
			}
			if (index == 28) {
				figure = 'queeenBlack';
				figureColor = false;
				leftIndent = 14;
				topIndent = 2;
				audio = queenaudio;
				
			}
			if (index == 27) {
				figure = 'kingBlack';
				figureColor = false;
				leftIndent = 14;
				topIndent = 2;
				audio = pawnaudio;
				
			}
			
			return <Element key={nanoid()} number={index} coord={notes} setCoord={(arr) => setNotes(arr)} 
			arrayX={arrayX} arrayY={arrayY} whitePlace={whitePlace} blackPlace={blackPlace} 
			color={color} setColor={(num) => setColor(num)} figure={figure}
			leftIndent={leftIndent} topIndent = {topIndent} figureColor={figureColor}
			gameOver={gameOver} audio={audio}/>
		}
		
	}).filter(item => item != undefined);

	function summ (arr1, arr2, num) {
		let summ1 = arr1.filter(function (item, index) {
			if (index <8 && item.Y == num) {
				return item;
			}

		}).length;
		let summ2 = arr2;
		summ2 = summ2.map(function (item, index) {
			if ((index < 8 || index == 11) && item.Flag == false) {
				return 10;
			}
			if ((index >= 8 && index <= 10 || index >= 13 && index <= 15) && item.Flag == false) {
				return 20;
			}
			if (index == 12 && item.Flag == false) {
				return 50;
			}
		}).filter(item => item != undefined);
		let summ3 = (summ1 == 0? 0 : (summ1 * 100)) + (summ2.length == 0? 0 : summ2.reduce((a, b) => a+b));
		return summ3;
	}
		
	return <>
	<div style={{backgroundImage: `url(${backgroundImage})`,  height: 750 + 'px',  width: 750 + 'px', backgroundSize: 'contain'}} >
		{array2}
	</div>
	<div >
		<img src={blackDesk} style={{position: 'absolute', left: 760, top: 69, width: 300}} />
		<img src={whiteDesk} style={{position: 'absolute', left: 760, top: 250, width: 300}} />
		<img src={finishDesk} style={{position: 'absolute', left: 760, top: 450, width: 300, display: gameOver? 'block' : 'none'}} />
		<p style={{position: 'absolute', left: 880, top: 49, width: 300, 
		fontWeight: 'bold', color: 'white', fontSize: 60}}>{p1}</p>
		<p style={{position: 'absolute', left: 880, top: 230, width: 300, 
		fontWeight: 'bold', color: 'black', fontSize: 60}}>{p2}</p>
		{finish}
		
	</div>
	</>

}

export default Chess;