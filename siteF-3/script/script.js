window.onload = () => {
    // gnb
    const hoverMenu = document.querySelector('#gnb > ul');
    const subMenu = document.querySelectorAll('.submenu');
    const subMenuBg = document.querySelector('.gnb-sub-bg');

    hoverMenu.addEventListener('mouseover', () => {
        subMenu.forEach(function (sub) {
            sub.style.height = '180px';
        });
        subMenuBg.classList.add('on');
    });
    subMenu.forEach((sub) => {
        sub.addEventListener('mouseout', () => {
            subMenu.forEach(function (sub) {
                sub.style.height = '0';
            });
            subMenuBg.classList.remove('on');
        });
    });

    //slider
    let currentIndex = 0;
    const sliderWrap = document.querySelector('.slider-wrap');
    const sliderList = document.querySelectorAll('.slider-wrap .slider');
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);
    const transPer = 100 / (sliderList.length + 1);
    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = 'all 0.6s';
        sliderWrap.style.transform = `translateX(${-transPer * currentIndex}%)`;
        setTimeout(() => {
            if (sliderList.length == currentIndex) {
                sliderWrap.style.transition = 'all 0s';
                sliderWrap.style.transform = `translateX(0})`;
                currentIndex = 0;
            }
        }, 300);
    }, 2300);

    // tab
    const tabMenu = document.querySelectorAll('.tab-menu > button');
    const tabCont = document.querySelectorAll('.tab-cont-wrap > ul');
    tabMenu[0].classList.add('on');
    tabCont[0].classList.add('on');

    tabMenu.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabMenu.forEach((tab) => {
                tab.classList.remove('on');
            });
            tabCont.forEach((tabc) => {
                tabc.classList.remove('on');
            });
            tabMenu[index].classList.add('on');
            tabCont[index].classList.add('on');
        });
    });

    // pop
    const popOpen = document.querySelector('.pop-open');
    const popClose = document.querySelector('.pop-close');
    const popWrap = document.querySelector('.pop-wrap');

    popOpen.addEventListener('click', () => {
        popWrap.classList.add('on');
    });
    popClose.addEventListener('click', () => {
        popWrap.classList.remove('on');
    });
};
