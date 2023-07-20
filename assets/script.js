const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slideIndex = 0;
const slideNbr = slides.length;
// console.log(slideNbr);

const containerDots = document.querySelector(".dots");

for (let index = 0; index < slideNbr; index++) {
  let dot = document.createElement("div");
  dot.className = "dot";
  //   console.log(dot);
  containerDots.appendChild(dot);
}

// Afficher les diapositives et les dots
function showSlides(index) {
  const bannerImg = document.querySelector(".banner-img");
  const tagline = document.querySelector("#banner p");
  const dots = document.querySelectorAll(".dot");

  // Mettre à jour la source de l'image et le tagline
  bannerImg.src = slides[index].image;
  tagline.innerHTML = slides[index].tagLine;

  // Mettre à jour la classe pour les dots
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Flèche gauche du carrousel
const arrowPrev = document.querySelector(".arrow_left");
arrowPrev.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = slideNbr - 1;
  } else {
    slideIndex = slideIndex - 1;
  }
  showSlides(slideIndex);
});

// Flèche droite du carrousel
const arrowNext = document.querySelector(".arrow_right");
arrowNext.addEventListener("click", () => {
  if (slideIndex === slideNbr - 1) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }
  showSlides(slideIndex);
});

// Écouter les clics sur les dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlides(slideIndex);
  });
});

// Afficher la diapositive initiale
showSlides(slideIndex);
