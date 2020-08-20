
const audioButtons = document.querySelectorAll('.audioBtn');
const songs = [
	'audio/soundOne.wav',
	'audio/soundTwo.mp3',
	'audio/soundThree.mp3',
   	'audio/soundFour.mp3',
	'audio/soundFive.mp3',
	'audio/soundSix.mp3'
]

const playSound = (array) => {
	const song = new Audio();
	song.src = array;
	song.autoplay = false;
	song.play();
	return song;
} 

const playSoundOnPress = (element) => {
	switch (element.keyCode){
	case 81:
		playSound(songs[0]);
		break;
	case 87:
		playSound(songs[1]);
		break;
	case 69:
		playSound(songs[2]);
		break;
	case 82:
		playSound(songs[3]);
		break;
	case 84:
		playSound(songs[4]);
		break;
 	case 89:
		playSound(songs[5])
		break;	
	}
}

for(let i = 0; i < audioButtons.length; i++) {
	audioButtons[i].addEventListener('click', () => {
		playSound(songs[i]);
	});
}

document.addEventListener("keydown", playSoundOnPress);
