import  { nanoid } from 'nanoid';
import React, { useState } from 'react';
import '../App.css';
import handleUpRookWhite from './functions/handleUpRookWhite'
import handleUpPawnWhite from './functions/handleUpPawnWhite'
import handleUpPawnBlack from './functions/handleUpPawnBlack'
import handleUpRookBlack from './functions/handleUpRookBlack'
import handleUpKnightWhite from './functions/handleUpKnightWhite'
import handleUpKnightBlack from './functions/handleUpKnightBlack'
import handleUpBishopWhite from './functions/handleUpBishopWhite'
import handleUpBishopBlack from './functions/handleUpBishopBlack'
import handleUpQueenBlack from './functions/handleUpQueenBlack'
import handleUpQueenWhite from './functions/handleUpQueenWhite'
import handleUpKingWhite from './functions/handleUpKingWhite'
import handleUpKingBlack from './functions/handleUpKingBlack'

import pawnBlack from '../resources/пешкаЧерная.png'
import pawnWhite from '../resources/пешкаБелая.png'
import rookWhite from '../resources/башняБелая.png'
import rookBlack from '../resources/башняЧерная.png'
import knightWhite from '../resources/коньБелый.png'
import knightBlack from '../resources/коньЧерный.png'
import bishopWhite from '../resources/офицерБелый.png'
import bishopBlack from '../resources/офицерЧерный.png'
import queeenBlack from '../resources/королеваЧерная.png'
import queeenWhite from '../resources/королеваБелая.png'
import kingWhite from '../resources/корольБелый.png'
import kingBlack from '../resources/корольЧерный.png'


import pawnAydio from '../resources/звукПешкиИКороля.mp3'
import rookAydio from '../resources/труба.mp3'
import knightAydio from '../resources/ржаниеЛошади.mp3'
import bishopAydio from '../resources/епископ.mp3'
import queeenAydio from '../resources/шепот.mp3'


function Element(props) {
	const [count, setCount] = useState(false);

	let img = {rookWhite, pawnBlack, pawnWhite, knightWhite, rookBlack, knightBlack, 
	bishopWhite, bishopBlack, queeenBlack, queeenWhite, kingWhite, kingBlack};

	let functions = {rookWhite: handleUpRookWhite, pawnBlack: handleUpPawnBlack, 
	knightWhite: handleUpKnightWhite, pawnWhite: handleUpPawnWhite, rookBlack: handleUpRookBlack,
	knightBlack: handleUpKnightBlack, bishopWhite: handleUpBishopWhite, bishopBlack: handleUpBishopBlack,
	queeenBlack: handleUpQueenBlack, queeenWhite: handleUpQueenWhite, kingWhite: handleUpKingWhite,
	kingBlack: handleUpKingBlack};

	let arrayX1 = [...props.arrayX];
	let arrayY1 = [...props.arrayY];
	
	function handleDown () {
		if (props.color == props.figureColor) {
			setCount(true);
		}
	}

	function handleMove (event) {
		if (count) {
			event.target.style.top = event.pageY - event.target.offsetHeight / 2 + 'px';
			event.target.style.left = event.pageX - event.target.offsetWidth / 2 + 'px';
		}
		event.target.ondragstart = function() {
			return false;
		};
	}
	let Element;
	if (props.coord[props.number].Flag) {
		Element = <img key={nanoid()} src={img[props.figure]} 
		style={{position: 'absolute', left: props.coord[props.number].X - props.leftIndent, top: props.coord[props.number].Y - props.topIndent, 
		height: 75, zIndex: count? 100 : props.number}}
		onMouseDown={() => handleDown(props.color, setCount)}
		onMouseMove={event => handleMove(event, count)}
		onMouseOut={() => setCount(false)}
		onMouseUp={(event) => functions[props.figure](event, props.whitePlace, props.blackPlace, 
			props.coord, props.number,
			props.setColor, props.setCoord, setCount, props.arrayX, props.arrayY, props.color, props.gameOver, props.audio)}/>
	}

	return Element;

}

export default Element;