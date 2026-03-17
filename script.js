const slides = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot");

let current = 0;

//show slide function
function showSlide(index){
	slides.forEach((slide, i) =>{
		slide.classList.remove("active");
		slide.style.display = "none";
		dots[i].classList.remove("bg-blue-500");
		dots[i].classList.add("bg-gray-400");
	});

	slides[index].style.display = "block";
	slides[index].classList.add("active");
	dots[index].classList.add("bg-blue-500")
}

//Next Slide
function nextSlide(){
	current = (current + 1) % slides.length;
	showSlide(current);
}

//Previous Slide
function prevSlide(){
	current = (current - 1 + slides.length) % slides.length;
	showSlide(current);
}

//dots click
dots.forEach((dot, i) => {
	dot.addEventListener('click', () =>{
		current = i;
		showSlide(current);
	});
});

//initial display
showSlide(current);

//Auto Slide
setInterval(nextSlide, 4000);

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);