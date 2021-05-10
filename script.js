alert('Click on Dio');

const div = document.querySelector('div');
const bg = document.querySelector('.bg');
const audioFile = document.querySelector('audio');
const dio = document.querySelector('.dio');

function clickOnDio() {
	audioFile.play();
	setTimeout( () => {
		div.style.transform = "scale(15)"
		bg.style.animation = "changeColor 1s linear 0s infinite"
		dio.style.filter = 'invert(100%)'
		setTimeout( () => {
	 		div.style.transform = "scale(0)"
	 		bg.style.animation = "none"
	 		dio.style.filter = 'invert(0%)'
	 	}
	  	,10500);
	},1400)
}