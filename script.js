const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const thumbsContainer = document.getElementById("thumbs");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");


let current = 0;
let interval;


//create dots & thumbnails
slides.forEach((slide, i) =>{
	//dot
	let dot = document.createElement("span");
	dot.className = "w-3 h-3 bg-gray-400 rounded-full cursor-pointer";
	dot.onclick = () =>{ current = i; showSlide(); resetAuto(); };
	dotsContainer.appendChild(dot);

	//Thumbnail
	let img = slide.querySelector("img").src;
	let thumb = document.createElement("img");
	thumb.src = img;
	thumb.className = "w-16 h-10 object-cover cursor-pointer opacity-60";
	thumb.onclick = () => {current = i; showSlide(); resetAuto(); };
	thumbsContainer.appendChild(thumb);
});

const dots = dotsContainer.children;
const thumbs = thumbsContainer.children;


//show slide function
function showSlide(){
	slides.forEach((slide, i) =>{
		slide.classList.remove("opacity-100");
		slide.classList.add("opacity-0");

		dots[i].classList.remove("bg-blue-500");
		dots[i].classList.add("bg-gray-400");
		
		thumbs[i].classList.remove("opacity-100");
		thumbs[i].classList.add("opacity-60");
	});

	slides[current].classList.remove("opacity-0");
	slides[current].classList.add("opacity-100");

	dots[current].classList.add("bg-blue-500");
	thumbs[current].classList.add("opacity-100");
}

//Next / Prev
function nextSlide(){
	current = (current + 1) % slides.length;
	showSlide();
}
function prevSlide(){
	current = (current - 1 + slides.length) % slides.length;
	showSlide();
}


//Auto Slide
function startAuto(){
	interval = setInterval(nextSlide, 4000);
}
function resetAuto(){
	clearInterval(interval);
	startAuto();
}

//buttons
document.getElementById("next").onclick = () =>{nextSlide(); resetAuto(); };
document.getElementById("prev").onclick = () =>{prevSlide(); resetAuto(); };


//Hover Pause
const slider = document.getElementById("slider");
slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", startAuto);

//Lightbox
slides.forEach(slide =>{
	slide.onclick = () =>{
	lightbox.style.display = "flex";
	lightboxImg.src = slide.querySelector("img").src;
	};
});

lightbox.onclick = () => (lightbox.style.display = "none");


//Initial Show
showSlide();
startAuto();