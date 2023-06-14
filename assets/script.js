const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


numberOfslides = slides.length;
console.log("Il y a " + numberOfslides + " element dans le tab slide");


for (let index = 0; index < numberOfslides; index++) {
	let slide = slides[index];
	let divDot = document.createElement('div');
	divDot.classList.add('dot');
	const dotContainer = document.querySelector('.dots');
	dotContainer.appendChild(divDot);
	let divImage = document.createElement('img');
	divImage.classList.add('banner-img');
	divImage.src = slide.image;
	let imgContainer = document.querySelector('#banner')
	imgContainer.appendChild(divImage);





		// Load Text
		let divTagLine = document.createElement('p');
		divTagLine.innerHTML = slide.tagLine;
		let textContainer = document.querySelector('#banner')
		textContainer.appendChild(divTagLine);

}

const imgArray = document.querySelectorAll('img.banner-img');
const textArray = document.querySelectorAll('#banner p');
//const textArray = document.closest('main#banner > p');
const dotsArray = document.querySelectorAll('div.dot');
const dotsArrayLength = dotsArray.length;

initializeDot();

function initializeDot() {

	//let dotsArray = document.querySelectorAll('div.dot')
	for (i = 0; i < dotsArrayLength; i++) {
		if (i === 0) {
			dotsArray[i].addEventListener("click", selectDot(dotsArray[i], imgArray[i], textArray[i]));
		}
		else {
			dotsArray[i].addEventListener("click", deleteDotSelected(dotsArray[i], imgArray[i], textArray[i]));
		}
	}

	function selectDot(dotSelected, imgToDisplay, textToDisplay) {
		dotSelected.classList.toggle('dot_selected');
		imgToDisplay.style.display = "block";
		textToDisplay.style.display = "block";
	}

	function deleteDotSelected(dotUnselected, imgToHide, textToHide) {
		dotUnselected.classList.remove('dot_selected');
		imgToHide.style.display = "none";
		textToHide.style.display = "none";
		
	}
}

for (let i = 0; i < dotsArrayLength; i++) {
	dotsArray[i].addEventListener('click', function () {
		//		console.log("Boucle");
		for (let i = 0; i < dotsArrayLength; i++) {
			//	console.log("Class name = " + dotsArray[i].className + "");
			if (dotsArray[i].className === 'dot dot_selected') {
				//		console.log("IF");
				dotsArray[i].classList.remove('dot_selected');
				imgArray[i].style.display = "none";
				textArray[i].style.display = "none";
			}
		}
		dotsArray[i].classList.toggle('dot_selected');
		imgArray[i].style.display = "block";
		textArray.style.display = "block";
	})
}

const arrowLeft = document.getElementsByClassName('arrow_left');

arrowLeft[0].addEventListener("click", function () {
	console.log("Click on left");
	for (let i = 0; i < dotsArrayLength; i++) {
		if (dotsArray[i].className === 'dot dot_selected') {
			if (i === 0) {
				i = dotsArrayLength;
				dotsArray[0].classList.remove('dot_selected');
				imgArray[0].style.display = "none";
				textArray[0].style.display = "none";
				dotsArray[dotsArrayLength - 1].classList.add('dot_selected');
				imgArray[dotsArrayLength - 1].style.display = "block";
				textArray[dotsArrayLength - 1].style.display = "block";
			}
			else {
				dotsArray[i].classList.remove('dot_selected');
				imgArray[i].style.display = "none";
				textArray[i].style.display = "none";
				dotsArray[i - 1].classList.add('dot_selected');
				imgArray[i - 1].style.display = "block";
				textArray[i - 1].style.display = "block";
			}
		}
	}
});

const arrowRight = document.getElementsByClassName('arrow_right');

arrowRight[0].addEventListener("click", function () {
	console.log("Click on right");
	for (let i = dotsArrayLength - 1; i >= 0; i--) {
		if (dotsArray[i].className === 'dot dot_selected') {
			if (i === (dotsArrayLength - 1)) {
				i = 0;
				dotsArray[dotsArrayLength - 1].classList.remove('dot_selected');
				imgArray[dotsArrayLength - 1].style.display = "none";
				textArray[dotsArrayLength - 1].style.display = "none";
				dotsArray[0].classList.add('dot_selected');
				imgArray[0].style.display = "block";
				textArray[0].style.display = "block";
			}
			else {
				dotsArray[i].classList.remove('dot_selected');
				imgArray[i].style.display = "none";
				textArray[i].style.display = "none";
				dotsArray[i + 1].classList.add('dot_selected');
				imgArray[i + 1].style.display = "block";
				textArray[i + 1].style.display = "block";
			}
		}
	}
});




/*
slides.forEach(image) => {
	let divDot = document.createElement('div');
	divDot.src = image.image;
	divDot.classList.add('dot');
	const dotContainer = document.querySelector('.dots');
	dotContainer.appendChild(divDot);
}
*/