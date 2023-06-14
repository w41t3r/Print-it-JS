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





	/*	
		let divTagLine = document.createElement('p');
		divTagLine.innerHTML = slide.tagLine;
		let textContainer = document.querySelector('#banner')
		textContainer.appendChild(divTagLine);
	*/
}

initializeDot();

function initializeDot() {

	let dotsArray = document.querySelectorAll('div.dot')
	for (i = 0; i < dotsArray.length; i++) {
		console.log("Dot n': " + i + "");

		if (i === 0) {
			dotsArray[i].addEventListener("click", selectDot(dotsArray[i]));
			console.log("IF");
		}
		else {
			dotsArray[i].addEventListener("click", deleteDotSelected(dotsArray[i]));
			console.log("ELSE");
		}
	}

	function selectDot(dotSelected) {
		dotSelected.classList.toggle('dot_selected');
	}

	function deleteDotSelected(dotUnselected) {
		dotUnselected.classList.remove('dot_selected');
	}
}

const dotsArray = document.querySelectorAll('div.dot');

for (let i = 0; i < dotsArray.length; i++) {
	dotsArray[i].addEventListener('click', function () {
		//		console.log("Boucle");
		for (let i = 0; i < dotsArray.length; i++) {
		//	console.log("Class name = " + dotsArray[i].className + "");
			if (dotsArray[i].className === 'dot dot_selected') {
		//		console.log("IF");
				dotsArray[i].classList.remove('dot_selected');
			}
		}
		dotsArray[i].classList.toggle('dot_selected');
	})
}

const arrowLeft = document.getElementsByClassName('arrow_left');
arrowLeft[0].addEventListener("click", function () {
	console.log("Click on left");
	

});

const arrowRight = document.getElementsByClassName('arrow_right');
arrowRight[0].addEventListener("click", function () {
	console.log("Click on right");
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