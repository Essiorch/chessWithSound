
function handleUpPawnWhite(event, whitePlace, blackPlace, coord, number, setColor, setCoord, setCount, arrayX, arrayY, color,  gameOver, audio) {
		
	let arrayX1 = [...arrayX];
	let arrayY1 = [...arrayY];

	let x = arrayX1.sort( (a, b) => Math.abs(event.pageX - a) - Math.abs(event.pageX - b) )[0];
	let y = arrayY1.sort( (a, b) => Math.abs(event.pageY - a) - Math.abs(event.pageY - b) )[0];
	
	if (x == coord[number].X && arrayY.indexOf(coord[number].Y) == arrayY.indexOf(y) + 1 &&
	coord.filter(item => item.X == x && item.Y == y && item.Flag == true).length == 0 && color === true && gameOver == false) {
		if (!(x == coord[number].X && y == coord[number].Y)) {
			setColor(false);
		}
		audio.play();
		setCoord([ ...coord.slice(0, number), {X: x, Y: y, Flag: true}, ...coord.slice(number + 1)]);
	}
	
	if ((blackPlace.filter(item => item.X == arrayX[arrayX.indexOf(coord[number].X) - 1] && 
	item.Y == arrayY[arrayY.indexOf(coord[number].Y) - 1] && item.Flag == true ||
	item.X == arrayX[arrayX.indexOf(coord[number].X) + 1] && 
	item.Y == arrayY[arrayY.indexOf(coord[number].Y) - 1] && item.Flag == true).length != 0) &&
	((x == arrayX[arrayX.indexOf(coord[number].X) - 1] || x == arrayX[arrayX.indexOf(coord[number].X) + 1])
	&& y == arrayY[arrayY.indexOf(coord[number].Y) - 1]) && color === true && gameOver == false) {
		let arr = coord;
		arr.map(function (item) {
			if (item.X == x && item.Y == y && item.Flag == true) {
				item.Flag = false;
			}
			return item;
		});
		setCoord(arr);
		audio.play();
		setCoord([ ...coord.slice(0, number), {X: x, Y: y, Flag: true}, ...coord.slice(number + 1)]);
		if (!(x == coord[number].X && y == coord[number].Y)) {
			setColor(false);
		}
	}
	setCount(false);
}

export default handleUpPawnWhite;