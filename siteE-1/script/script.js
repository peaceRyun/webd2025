window.onload = () => {
    // sliders
    let currentIndex = 0;
    const sliderWrap = document.querySelector('.slider_wrap');
    const sliders = document.querySelectorAll('.slider_wrap .slider');
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);
    const transPercent = 100 / (sliders.length + 1);
    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = 'all 0.6s';
        console.log(transPercent);
        sliderWrap.style.transform = `translateX(${-transPercent * currentIndex}%)`;
        setTimeout(() => {
            if (currentIndex == sliders.length) {
                sliderWrap.style.transition = 'all 0s';
                sliderWrap.style.transform = `translateX(0)`;
                currentIndex = 0;
            }
        }, 700);
    }, 2300);

    // pop
    const popOpen = document.querySelector('.pop-open');
    const popClose = document.querySelector('.pop-close');
    const popWrap = document.querySelector('.pop_wrap');

    popOpen.addEventListener('click', () => {
        popWrap.classList.add('on');
    });
    popClose.addEventListener('click', () => {
        popWrap.classList.remove('on');
    });
};
