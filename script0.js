const sliderContainerEl = document.querySelector('.slider-container');
const sliderEl = sliderContainerEl.querySelector('.slider');
const imgEls = sliderEl.querySelectorAll('img');
const navEl = sliderContainerEl.querySelector('.navigation');
const prevBtnEl = sliderContainerEl.querySelector('.pbtn');
const nextBtnEl = sliderContainerEl.querySelector('.nbtn');

for (let i = 0; i < imgEls.length; i++) {
    navEl.insertAdjacentHTML('beforeend', `<div class="dot" data-slide-index="${i}"></div>`);
}

navEl.querySelector('.dot[data-slide-index="0"]').classList.add('active');

const dotEls = navEl.querySelectorAll('.dot');
const arrayDots = Array.from(dotEls);

let slideIndex = 0;
const imgArray = Array.from(imgEls);

prevBtnEl.addEventListener('click', () => {
    slideIndex = (imgArray.length - 1 + slideIndex) % imgArray.length;
    imgStylesUpdate(slideIndex);
    activeDot(slideIndex);
});

nextBtnEl.addEventListener('click', () => {
    slideIndex = (1 + slideIndex) % imgArray.length;
    imgStylesUpdate(slideIndex);
    activeDot(slideIndex);
});

navEl.addEventListener('click', ({target}) => {
    if (target.matches('.dot')) {
        const dotIndex = parseInt(target.getAttribute('data-slide-index'));
        slideIndex = dotIndex;
        imgStylesUpdate(slideIndex);
        activeDot(slideIndex);
    }

})

function imgStylesUpdate(index) {
    imgArray.forEach(img => {
        if (index === imgArray.indexOf(img)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    })
}

function activeDot(index) {
    arrayDots.forEach(el => {
        el.classList.remove('active');
        if (arrayDots.indexOf(el) === index) el.classList.add('active');
    });
}