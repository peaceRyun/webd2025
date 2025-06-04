window.onload = () => {
    // slider
    let currentIndex = 0;
    const sliderList = document.querySelectorAll('.slider-wrap > li');
    sliderList[currentIndex].style.opacity = 1;

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % sliderList.length;
        sliderList[nextIndex].style.opacity = 1;
        sliderList[currentIndex].style.opacity = 0;
        currentIndex = nextIndex;
    }, 3000);
    // tab
    const tabs = document.querySelectorAll('.tabs > button');
    const tabConts = document.querySelectorAll('.tab-cont > ul');
    tabs[0].classList.add('on');
    tabConts[0].classList.add('on');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            tabs.forEach((tab) => {
                tab.classList.remove('on');
            });
            this.classList.add('on');
            tabConts.forEach((tabcont) => {
                tabcont.classList.remove('on');
            });
            tabConts[index].classList.add('on');
        });
    });
    // pop
    const popOpen = document.querySelector('.pop-open');
    const popClose = document.querySelector('.pop-close');
    const popWrap = document.querySelector('.pop-wrap');
    popOpen.addEventListener('click', (e) => {
        e.preventDefault();
        popWrap.classList.add('on');
    });
    popClose.addEventListener('click', () => {
        popWrap.classList.remove('on');
    });
};
