const slides = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot");

let current = 0;

//show slide function
function showSlide(index){
	slides.forEach((slide, i) =>{
		slide.classList.remove("opacity-100");
		slide.classList.add("opacity-0");

		dots[i].classList.remove("bg-blue-500");
		dots[i].classList.add("bg-gray-400");
	});

	slides[index].classList.remove("opacity-0");
	slides[index].classList.add("opacity-100");
	dots[index].classList.add("bg-blue-500")
}

//Next / Prev
function nextSlide(){
	current = (current + 1) % slides.length;
	showSlide(current);
}
function prevSlide(){
	current = (current - 1 + slides.length) % slides.length;
	showSlide(current);
}

//dots click
dots.forEach((dot, i) => {
	dot.addEventListener('click', () =>{
		current = i;
		showSlide(current);
		resetInterval();
	});
});

//Auto Slide
let slideInterval = setInterval(nextSlide, 4000);


//Reset interval after manual click
function resetInterval(){
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, 4000);
}

//buttons
document.getElementById("next").addEventListener("click", () =>{
	nextSlide();
	resetInterval();
});

document.getElementById("prev").addEventListener("click", () =>{
	prevSlide();
	resetInterval();
});

//swipe support for mobile
let startX = 0;
let endX = 0;
const sliderContainer = document.getElementById("slider");

sliderContainer.addEventListener("touchstart", e => { 
	startX = e.touches[0].clientX; 
});

sliderContainer.addEventListener("touchend", e => {
	endX = e.changedTouches[0].clientX;
	
	if(endX - startX > 50) prevSlide();
	if(startX - endX > 50) nextSlide();
	resetInterval();
});

document.getElementById("prev").addEventListener("click", () =>{
	prevSlide();
	resetInterval();
});


//Initial Show
showSlide(current);