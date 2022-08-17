const items = document.querySelectorAll('.questions-item__title');
items.forEach((element) => {
    element.addEventListener("click", () => {
        items.forEach((el) => {
            if(el == element) {
                return;
            }
            el.parentElement.classList.remove('questions-item_active');
        }); 
        element.parentElement.classList.toggle('questions-item_active');
    })
});

// Feedback Slider
// slider-feedback__button_disable
const prevButton = document.getElementsByClassName('slider-feedback__button_left')[0];
const nextButton = document.getElementsByClassName('slider-feedback__button_right')[0];

const slides = document.querySelectorAll('.feedback-slide');

let currentSlide = 0;



function moveSlider() {
    console.log(currentSlide);
    slides.forEach((e) => {
        e.style.transform = `translateX(calc(-${100*currentSlide}% - ${currentSlide * 24}px))`;
    });
    if (currentSlide <= 0) {
        if(!prevButton.classList.contains('slider-feedback__button_disable')) {
            prevButton.classList.add('slider-feedback__button_disable');
        }
    } else {
        if(prevButton.classList.contains('slider-feedback__button_disable')) {
            prevButton.classList.remove('slider-feedback__button_disable');
        }
    }
    if (currentSlide >= slides.length - 1) {
        if(!nextButton.classList.contains('slider-feedback__button_disable')) {
            nextButton.classList.add('slider-feedback__button_disable');
        }
    } else {
        if(nextButton.classList.contains('slider-feedback__button_disable')) {
            nextButton.classList.remove('slider-feedback__button_disable');
        }
    }
}

moveSlider();

prevButton.addEventListener('click', (e) => {
    if (currentSlide <= 0) {
        return false;
    }
    currentSlide --;
    moveSlider();
});
nextButton.addEventListener('click', (e) => {
    if (currentSlide >= slides.length - 1) {
        return false;
    }
    currentSlide ++;
    moveSlider();
});