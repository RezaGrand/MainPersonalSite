const slides = document.querySelector(".slidesCont");
const slideTest1 = document.querySelector(".slideTest1");
const slideTest2 = document.querySelector(".slideTest2");
const slideTest3 = document.querySelector(".slideTest3");
const rightMover = document.querySelector(".rightMover");
const leftMover = document.querySelector(".leftMover");

let activeSlide = 1;
rightMover.addEventListener("click", function (){
    if (activeSlide < 3) {
        activeSlide = activeSlide + 1;
    }else{
        activeSlide = 1;
    }
    activeSlideDisplayer();
})

leftMover.addEventListener("click", function (){
    if (activeSlide>1) {
        activeSlide = activeSlide - 1;
    }else{
        activeSlide = 3;
    }
    activeSlideDisplayer();
})

function activeSlideDisplayer(){
    switch (activeSlide){
        case 1:
            slides.style.transform = "translateX(0px)"
            break
        case 2:
            slides.style.transform = "translateX(-800px)"
            break
        case 3:
            slides.style.transform = "translateX(-1600px)"
            break
    }
}
