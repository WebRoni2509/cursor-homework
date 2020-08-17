
const styles = {
  width: '50px',
  height: '50px',
  display: 'inline-block'
}

const blocksContainer = document.querySelector('.container');
const runIntervalBtn = document.querySelector('#run-interval');

const getRandomColor = () => {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

const createBlock = () => {
	const block = document.createElement("div");
	blocksContainer.appendChild(block);
	block.classList.add('block-item');
	block.style.width = styles.width;
	block.style.height = styles.height;
	block.style.display = styles.display;
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