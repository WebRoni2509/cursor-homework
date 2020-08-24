
// let blockWidth = +prompt('введіть ширину');
// let blockHeight = +prompt('введіть висоту');

const colorBlockStyles = {
  width: 50,
  height: 50,
  display: 'inline-block'
}

const blocksContainer = document.querySelector('.container');
const runIntervalBtn = document.querySelector('#run-interval');

const getRandomColor = () => {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

const createBlock = () => {
	const block = document.createElement("div");
	const parentContainerWidth = colorBlockStyles.width * 5
	blocksContainer.style.width = parentContainerWidth + 'px';
	blocksContainer.appendChild(block);
	block.classList.add('block-item');
	block.style.width = colorBlockStyles.width + 'px';
	block.style.height = colorBlockStyles.height + 'px';
	block.style.display = colorBlockStyles.display;
	block.style.background = getRandomColor();
}

const generateBlocks = () => {
	for(let i = 0; i < 25; i++){
  	createBlock();
  } 
}

const generateBlocksInterval = () => {
	const allBlocks = document.querySelectorAll('.block-item');
	setInterval(() => {
		allBlocks.forEach(function (element) {
			element.style.backgroundColor = getRandomColor();
		});
	}, 1000)
}

generateBlocks();

runIntervalBtn.addEventListener('click', function () {
	generateBlocksInterval();
	this.classList.add('freeze');
})