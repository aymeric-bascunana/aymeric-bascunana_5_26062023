const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


let slideindex = 0;

// Savoit combien il y a délement dans mon tableau slides (Max slides)

console.log(slides)
console.log(slides[slideindex])



//fleche du carrousel//
const arrowPrev = document.querySelector(".arrow_left");
console.log(arrowPrev)
arrowPrev.addEventListener('click', () =>{
    console.log("Click sur left")
    if(slideindex==0){
        slideindex = 3
    }
    else{
        slideindex=slideindex-1
    }
    showSlides (slideindex);
})


const arrowNext = document.querySelector(".arrow_right")
console.log(arrowNext)
arrowNext.addEventListener('click', () =>{
    console.log("Click sur right")
    if(slideindex==3){
        slideindex = 0
    }
    else{
        slideindex=slideindex+1
    }
    showSlides (slideindex);
})

showSlide (slideindex);



function showSlides(index) {
    const bannerImg = document.querySelector(".banner-img");
    const tagline = document.querySelector("#banner p");
    
    bannerImg.src = slides[index].image;
    tagline.innerHTML = slides[index].tagLine;
}
 