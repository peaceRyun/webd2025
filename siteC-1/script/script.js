window.onload = () => {
    // nav
    const navList = document.querySelectorAll('#gnb > ul > li');
    navList.forEach((navItem) => {
        navItem.addEventListener('mouseover', function () {
            this.querySelector('.submenu').style.height = '110px';
        });
    });
    navList.forEach((navItem) => {
        navItem.addEventListener('mouseout', function () {
            this.querySelector('.submenu').style.height = '0px';
        });
    });

    // slider
    let currentIndex = 0;
    const sliderList = document.querySelectorAll('.slider');

    sliderList.forEach((sliderItem) => {
        sliderItem.style.opacity = 0;
    });
    sliderList[currentIndex].style.opacity = 1;

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % sliderList.length;

        sliderList[currentIndex].style.opacity = 0;
        sliderList[nextIndex].style.opacity = 1;
        currentIndex = nextIndex;
    }, 3000);

    // tab
    const tabs = document.querySelectorAll('.tabs button');
    const tabContLists = document.querySelectorAll('.tab_cont > ul');
    tabs[0].classList.add('on');
    tabContLists[0].classList.add('on');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            tabs[0].classList.remove('on');
            tabs[1].classList.remove('on');
            tabContLists[0].classList.remove('on');
            tabContLists[1].classList.remove('on');
            tabs[index].classList.add('on');
            tabContLists[index].classList.add('on');
        });
    });

    //pop
    const popOpen = document.querySelector('.pop-open');
    const popClose = document.querySelector('.pop-close');

    popOpen.addEventListener('click', () => {
        document.querySelector('.pop_wrap').classList.add('on');
    });

    popClose.addEventListener('click', () => {
        document.querySelector('.pop_wrap').classList.remove('on');
    });
};
