window.onload = () => {
    let currentIndex = 0;
    const sliderWrap = document.querySelector('.slider-wrap');
    const sliderList = document.querySelectorAll('.slider-wrap .slider');
    sliderList[currentIndex].style.opacity = 1;

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % sliderList.length;

        sliderList[currentIndex].style.opacity = 0;
        sliderList[nextIndex].style.opacity = 1;
        currentIndex = nextIndex;
    }, 2600);

    const popOpen = document.querySelector('.pop-open');
    const popClose = document.querySelector('.pop-close');
    const popWrap = document.querySelector('.pop-wrap');
    popWrap.classList.remove('on');

    popOpen.addEventListener('click', () => {
        popWrap.classList.add('on');
    });
    popClose.addEventListener('click', () => {
        popWrap.classList.remove('on');
    });
};
