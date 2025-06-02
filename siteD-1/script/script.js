window.onload = () => {
    // nav
    const navList = document.querySelectorAll('#gnb > ul > li');
    navList.forEach((navItem) => {
        navItem.addEventListener('mouseover', function () {
            this.querySelector('.submenu').style.height = '130px';
        });
        navItem.addEventListener('mouseout', function () {
            this.querySelector('.submenu').style.height = '0';
        });
    });
    // sliders
    let currentIndex = 0;
    const sliderWrap = document.querySelector('.slider_wrap');
    const slider = document.querySelectorAll('.slider_wrap > .slider');
    const firstClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(firstClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = 'all 0.6s';
        sliderWrap.style.transform = `translateY(${-33.33 * currentIndex}%)`;
        if (currentIndex === slider.length) {
            setTimeout(() => {
                currentIndex = 0;
                sliderWrap.style.transition = 'all 0s';
                sliderWrap.style.transform = 'translateY(0%)';
            }, 700);
        }
    }, 2300);

    // tab
    const tabs = document.querySelectorAll('.tabs > button');
    const tabCont = document.querySelectorAll('.tab_cont > ul');

    tabs[0].classList.add('on');
    tabCont[0].classList.add('on');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.classList.remove('on');
            });
            tabCont.forEach((tab) => {
                tab.classList.remove('on');
            });
            tabs[index].classList.add('on');
            tabCont[index].classList.add('on');
        });
    });

    // pop
    const popOpen = document.querySelector('.pop_open');
    const popClose = document.querySelector('.pop_close');

    popOpen.addEventListener('click', () => {
        document.querySelector('.pop_wrap').classList.add('on');
    });

    popClose.addEventListener('click', () => {
        document.querySelector('.pop_wrap').classList.remove('on');
    });
};
