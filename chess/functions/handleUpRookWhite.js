
function handleUpRookWhite (event, whitePlace, blackPlace, coord, number, setColor, setCoord, setCount, arrayX, arrayY, color, gameOver, audio) {
	function XYLimits (arr, arr1) {
		let heightYLimit = arr.filter(item => item.X == coord[number].X && item.Y > coord[number].Y && item.Flag == true)[0];
		if ( heightYLimit == undefined) {
			heightYLimit = {X: 800, Y: 800};
		}
		let downYLimit = arr.filter(item => item.X == coord[number].X && item.Y < coord[number].Y && item.Flag == true)[0];
		if (downYLimit == undefined) {
			downYLimit = {X: 800, Y: 0};
		}
		let heightXLimit = arr.filter(item => item.X > coord[number].X && item.Y == coord[number].Y && item.Flag == true)[0];
		if (heightXLimit == undefined) {
			heightXLimit = {X: 800, Y: 800};
		}
		let downXLimit = arr.filter(item => item.X < coord[number].X && item.Y == coord[number].Y && item.Flag == true)[0];
		if (downXLimit == undefined) {
			downXLimit = {X: 0, Y: 800};
		}
	
		let heightYLimitOppositeColor = arr1.filter(item => item.X == coord[number].X && item.Y > coord[number].Y && item.Flag == true)[0];
		if ( heightYLimitOppositeColor == undefined) {
			heightYLimitOppositeColor = {X: 800, Y: 800};
		}
		let downYLimitOppositeColor = arr1.filter(item => item.X == coord[number].X && item.Y < coord[number].Y && item.Flag == true)[0];
		if (downYLimitOppositeColor == undefined) {
			downYLimitOppositeColor = {X: 800, Y: 0};
		}
		let heightXLimitOppositeColor = arr1.filter(item => item.X > coord[number].X && item.Y == coord[number].Y && item.Flag == true)[0];
		if (heightXLimitOppositeColor == undefined) {
			heightXLimitOppositeColor = {X: 800, Y: 800};
		}
		let downXLimitOppositeColor = arr1.filter(item => item.X < coord[number].X && item.Y == coord[number].Y && item.Flag == true)[0];
		if (downXLimitOppositeColor == undefined) {
			downXLimitOppositeColor = {X: 0, Y: 800};
		}

		arr = {heightYLimit, downYLimit, heightXLimit, downXLimit, 
			heightYLimitOppositeColor, downYLimitOppositeColor, heightXLimitOppositeColor, downXLimitOppositeColor};

		return arr;
	}

		
	let arrayX1 = [...arrayX];
	let arrayY1 = [...arrayY];				
	let x = arrayX1.sort( (a, b) => Math.abs(event.pageX - a) - Math.abs(event.pageX - b) )[0];
	let y = arrayY1.sort( (a, b) => Math.abs(event.pageY - a) - Math.abs(event.pageY - b) )[0];
	
	let arr = XYLimits (whitePlace, blackPlace);
	
	if (x == coord[number].X && y != coord[number].Y && 
		y < arr.heightYLimit.Y && y > arr.downYLimit.Y && 
		y <= arr.heightYLimitOppositeColor.Y && y >= arr.downYLimitOppositeColor.Y && color === true && gameOver == false||
		x < arr.heightXLimit.X && x > arr.downXLimit.X && x <= arr.heightXLimitOppositeColor.X && 
		x >= arr.downXLimitOppositeColor.X && y == coord[number].Y && color === true && gameOver == false) {
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
	setCount(false);
	
}


export default handleUpRookWhite;