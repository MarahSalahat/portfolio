

document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.slider-button.next');
    const prevButton = document.querySelector('.slider-button.prev');

    let currentIndex = 0;

    function showSlide(index) {
        sliderWrapper.style.transform = `translateX(${-index * 100}%)`;
    }

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
