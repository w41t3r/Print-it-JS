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
	// Generate div .dot
	let divDot = document.createElement('div');
	divDot.classList.add('dot');
	const dotContainer = document.querySelector('.dots');
	dotContainer.appendChild(divDot);
	// Generate image tag
	let divImage = document.createElement('img');
	divImage.classList.add('banner-img');
	divImage.src = slide.image;
	let imgContainer = document.querySelector('#banner')
	imgContainer.appendChild(divImage);

	// Generate text tag
	let divTagLine = document.createElement('p');
	divTagLine.innerHTML = slide.tagLine;
	let textContainer = document.querySelector('#banner')
	textContainer.appendChild(divTagLine);

}
// Storing dots in an array
const dotsArray = document.querySelectorAll('div.dot');
// Storing images in an array
const imgagesArray = document.querySelectorAll('img.banner-img');
// Storaging texts in an array
const textsArray = document.querySelectorAll('#banner p');
const dotsArrayLength = dotsArray.length;

initializeDot();

// Function to initialize the slider on the first dot
function initializeDot() {
	for (i = 0; i < dotsArrayLength; i++) {
		if (i === 0) {
			dotsArray[i].addEventListener("click", selectDot(dotsArray[i], imgagesArray[i], textsArray[i]));
		}
		else {
			dotsArray[i].addEventListener("click", deleteDotSelected(dotsArray[i], imgagesArray[i], textsArray[i]));
		}
	}
	// Function to select dot
	function selectDot(dotSelected, imgToDisplay, textToDisplay) {
		dotSelected.classList.toggle('dot_selected');
		imgToDisplay.style.display = "block";
		textToDisplay.style.display = "block";
	}
	// Function to unselect last dot
	function deleteDotSelected(dotUnselected, imgToHide, textToHide) {
		dotUnselected.classList.remove('dot_selected');
		imgToHide.style.display = "none";
		textToHide.style.display = "none";
	}
}

// Function to select the slide by clicking on a point
for (let i = 0; i < dotsArrayLength; i++) {
	dotsArray[i].addEventListener('click', function () {
		for (let i = 0; i < dotsArrayLength; i++) {
			if (dotsArray[i].className === 'dot dot_selected') {
				dotsArray[i].classList.remove('dot_selected');
				imgagesArray[i].style.display = "none";
				textsArray[i].style.display = "none";
			}
		}
		dotsArray[i].classList.toggle('dot_selected');
		imgagesArray[i].style.display = "block";
		textsArray[i].style.display = "block";
	})
}

const arrowLeft = document.getElementsByClassName('arrow_left');
const arrowRight = document.getElementsByClassName('arrow_right');

// Function to select the slide by clicking on the left arrow
arrowLeft[0].addEventListener("click", function () {
	for (let i = 0; i < dotsArrayLength; i++) {
		if (dotsArray[i].className === 'dot dot_selected') {
			if (i === 0) {
				i = dotsArrayLength;
				dotsArray[0].classList.remove('dot_selected');
				imgagesArray[0].style.display = "none";
				textsArray[0].style.display = "none";
				dotsArray[dotsArrayLength - 1].classList.add('dot_selected');
				imgagesArray[dotsArrayLength - 1].style.display = "block";
				textsArray[dotsArrayLength - 1].style.display = "block";
			}
			else {
				dotsArray[i].classList.remove('dot_selected');
				imgagesArray[i].style.display = "none";
				textsArray[i].style.display = "none";
				dotsArray[i - 1].classList.add('dot_selected');
				imgagesArray[i - 1].style.display = "block";
				textsArray[i - 1].style.display = "block";
			}
		}
	}
});

// Function to select the slide by clicking on the rigth arrow
arrowRight[0].addEventListener("click", function () {
	console.log("Click on right");
	for (let i = dotsArrayLength - 1; i >= 0; i--) {
		if (dotsArray[i].className === 'dot dot_selected') {
			if (i === (dotsArrayLength - 1)) {
				i = 0;
				dotsArray[dotsArrayLength - 1].classList.remove('dot_selected');
				imgagesArray[dotsArrayLength - 1].style.display = "none";
				textsArray[dotsArrayLength - 1].style.display = "none";
				dotsArray[0].classList.add('dot_selected');
				imgagesArray[0].style.display = "block";
				textsArray[0].style.display = "block";
			}
			else {
				dotsArray[i].classList.remove('dot_selected');
				imgagesArray[i].style.display = "none";
				textsArray[i].style.display = "none";
				dotsArray[i + 1].classList.add('dot_selected');
				imgagesArray[i + 1].style.display = "block";
				textsArray[i + 1].style.display = "block";
			}
		}
	}
});