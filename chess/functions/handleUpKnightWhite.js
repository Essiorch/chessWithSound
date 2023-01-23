
function handleUpKnightWhite(event, whitePlace, blackPlace, coord, number, setColor, setCoord, setCount, arrayX, arrayY, color, gameOver, audio) {
		
	let arrayX1 = [... arrayX];
	let arrayY1 = [... arrayY];

	let x = arrayX1.sort( (a, b) => Math.abs(event.pageX - a) - Math.abs(event.pageX - b) )[0];
	let y = arrayY1.sort( (a, b) => Math.abs(event.pageY - a) - Math.abs(event.pageY - b) )[0];
	
	if (whitePlace.filter(item => item.X == x && item.Y == y && item.Flag == true).length == 0 && color === true && gameOver == false) {
		if (x ==  arrayX[arrayX.indexOf(coord[number].X)- 2] && y == arrayY[arrayY.indexOf(coord[number].Y) + 1] ||
		x == arrayX[arrayX.indexOf(coord[number].X) - 2] && y == arrayY[arrayY.indexOf(coord[number].Y) - 1] ||
		x == arrayX[arrayX.indexOf(coord[number].X) + 2] && y == arrayY[arrayY.indexOf(coord[number].Y) + 1] ||
		x == arrayX[arrayX.indexOf(coord[number].X) + 2] && y == arrayY[arrayY.indexOf(coord[number].Y) - 1] ||
		x == arrayX[arrayX.indexOf(coord[number].X) - 1] && y == arrayY[arrayY.indexOf(coord[number].Y) + 2] ||
		x == arrayX[arrayX.indexOf(coord[number].X) - 1] && y == arrayY[arrayY.indexOf(coord[number].Y) - 2] ||
		x == arrayX[arrayX.indexOf(coord[number].X) + 1] && y == arrayY[arrayY.indexOf(coord[number].Y) + 2] ||
		x == arrayX[arrayX.indexOf(coord[number].X) + 1] && y == arrayY[arrayY.indexOf(coord[number].Y) - 2]) {
			if (!(x == coord[number].X && y == coord[number].Y)) {
				setColor(false);
				audio.play();
			}
			
			if (blackPlace.filter(item => item.X == x && item.Y == y && item.Flag == true).length != 0) {
				let arr = coord;
				arr.map(function (item, index) {
					if (index > 15 && item.X == x && item.Y == y && item.Flag == true) {
						item.Flag = false;
						
					}
					return item;
				})
				setCoord(arr);
			}
			setCoord([ ...coord.slice(0, number), {X: x, Y: y, Flag: true}, ...coord.slice(number + 1)]);
			
		}
	}
	setCount(false);
}


export default handleUpKnightWhite;