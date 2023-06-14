function createRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomRGBColor() {
	const red = createRandomNumber(0, 255);
	const green = createRandomNumber(0, 255);
	const blue = createRandomNumber(0, 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

export { createRandomNumber, getRandomRGBColor };
