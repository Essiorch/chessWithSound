
function handleUpKingWhite (event, whitePlace, blackPlace, coord, number, setColor, setCoord, setCount, arrayX, arrayY, color,  gameOver, audio) {
	let arrayX1 = [...arrayX];
	let arrayY1 = [...arrayY];				
	let x = arrayX1.sort( (a, b) => Math.abs(event.pageX - a) - Math.abs(event.pageX - b) )[0];
	let y = arrayY1.sort( (a, b) => Math.abs(event.pageY - a) - Math.abs(event.pageY - b) )[0];
	let diagonalLimit = [];

	if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + 1] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + 1] && item.Flag == true).length == 0) {
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) + 1], Y: arrayY[arrayY.indexOf(coord[number].Y) + 1]});
	}
	if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - 1] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + 1] && item.Flag == true).length == 0) {
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) - 1], Y: arrayY[arrayY.indexOf(coord[number].Y) + 1]});
	}
	if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + 1] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - 1] && item.Flag == true).length == 0) {
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) + 1], Y: arrayY[arrayY.indexOf(coord[number].Y) - 1]});
	}
	if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - 1] && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - 1] && item.Flag == true).length == 0) {
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) - 1], Y: arrayY[arrayY.indexOf(coord[number].Y) - 1]});
	}

	if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) + 1] && item.Y == coord[number].Y && item.Flag == true).length == 0) {
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) + 1], Y: coord[number].Y});
	}
	if (whitePlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - 1] && item.Y == coord[number].Y && item.Flag == true).length == 0) {
		diagonalLimit.push({X: arrayX[arrayX.indexOf(coord[number].X) - 1], Y: coord[number].Y});
	}
	if (whitePlace.filter(item => item.X == coord[number].X && item.Y == arrayY[arrayY.indexOf(coord[number].Y) - 1] && item.Flag == true).length == 0) {
		diagonalLimit.push({X: coord[number].X, Y: arrayY[arrayY.indexOf(coord[number].Y) - 1]});
	}
	if (whitePlace.filter(item => item.X == coord[number].X && item.Y == arrayY[arrayY.indexOf(coord[number].Y) + 1] && item.Flag == true).length == 0) {
		diagonalLimit.push({X: coord[number].X, Y: arrayY[arrayY.indexOf(coord[number].Y) + 1]});
	}
	
	diagonalLimit.filter(item => item.X && item.Y).forEach( function (item) {
		if (x == item.X && y == item.Y && color === true && gameOver == false) {
			if (!(x == coord[number].X && y == coord[number].Y)) {
				setColor(false);
				audio.play();
				setCoord([ ...coord.slice(0, number), {X: x, Y: y, Flag: true}, ...coord.slice(number + 1)]);
			}
			if (blackPlace.filter(item => item.X == x && item.Y == y && item.Flag == true).length != 0) {
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


export default handleUpKingWhite;