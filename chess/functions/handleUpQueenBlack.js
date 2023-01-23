
function handleUpQueenBlack (event, whitePlace, blackPlace, coord, number, setColor, setCoord, setCount, arrayX, arrayY, color, gameOver, audio) {
	let arrayX1 = [...arrayX];
	let arrayY1 = [...arrayY];				
	let x = arrayX1.sort( (a, b) => Math.abs(event.pageX - a) - Math.abs(event.pageX - b) )[0];
	let y = arrayY1.sort( (a, b) => Math.abs(event.pageY - a) - Math.abs(event.pageY - b) )[0];
	let diagonalLimit = [];

	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + i] && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) + i], Y: arrayY[arrayY.indexOf(coord[number].Y) + i]});
		if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + i]).length != 0) break;
	}
	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + i] && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) - i], Y: arrayY[arrayY.indexOf(coord[number].Y) + i]});
		if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + i]).length != 0) break;
	}
	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - i] && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) + i], Y: arrayY[arrayY.indexOf(coord[number].Y) - i]});
		if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - i]).length != 0) break;
	}
	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - i] && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) - i], Y: arrayY[arrayY.indexOf(coord[number].Y) - i]});
		if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - i] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - i]).length != 0) break;
	}

	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + i] && item.Y == coord[number].Y && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) + i], Y: coord[number].Y});
		if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + i] && item.Y == coord[number].Y).length != 0) break;
	}
	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - i] && item.Y == coord[number].Y && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) - i], Y: coord[number].Y});
		if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - i] && item.Y == coord[number].Y).length != 0) break;
	}
	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == coord[number].X && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - i] && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: coord[number].X, Y: arrayY[arrayY.indexOf(coord[number].Y) - i]});
		if (whitePlace.filter(item => item.X == coord[number].X && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - i]).length != 0) break;
	}
	for (let i = 1; i < 8; i++) {
		if (blackPlace.filter(item => item.X == coord[number].X && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + i] && item.Flag == true).length != 0) break;
		diagonalLimit.push({X: coord[number].X, Y: arrayY[arrayY.indexOf(coord[number].Y) + i]});
		if (whitePlace.filter(item => item.X == coord[number].X && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + i]).length != 0) break;
	}
	
	diagonalLimit.filter(item => item.X && item.Y).forEach( function (item) {
		if (x == item.X && y == item.Y && color === false && gameOver == false) {
			if (!(x == coord[number].X && y == coord[number].Y)) {
				setColor(true);
				audio.play();
				setCoord([ ...coord.slice(0, number), {X: x, Y: y, Flag: true}, ...coord.slice(number + 1)]);
			}
			if (whitePlace.filter(item => item.X == x && item.Y == y && item.Flag == true).length != 0) {
				let arr = coord;
				arr.map(function (item, index) {
					if (item.X == x && item.Y == y && item.Flag == true) {
						item.Flag = false;
						
					}
					return item;
				})
				setCoord(arr);
			}
			setCoord([ ...coord.slice(0, number), {X: x, Y: y, Flag: true}, ...coord.slice(number + 1)]);

		}


	})
	setCount(false);
	
}


export default handleUpQueenBlack;