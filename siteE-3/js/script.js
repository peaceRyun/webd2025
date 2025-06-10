window.onload = () => {
    // const navList = document.querySelectorAll('#gnb > ul > li');
    // navList.forEach((navItem) => {
    //     navItem.addEventListener('mouseover', function () {
    //         this.querySelector('.submenu').style.height = '150px';
    //     });
    //     navItem.addEventListener('mouseout', function () {
    //         this.querySelector('.submenu').style.height = '0';
    //     });
    // });

    //sliders
    let currentIndex = 0;
    const sliderWrap = document.querySelector('.slider-wrap');
    const sliderList = document.querySelectorAll('.slider-wrap .slider');
    const firstClone = sliderWrap.firstElementChild.cloneNode('true');
    sliderWrap.appendChild(firstClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transform = `translateY( calc(-33.333% * ${currentIndex})`;
        sliderWrap.style.transition = `all 0.3s`;
        setTimeout(() => {
            if (sliderList.length == currentIndex) {
                sliderWrap.style.transform = `translateY(0)`;
                sliderWrap.style.transition = `all 0s`;
                currentIndex = 0;
            }
        }, 700);
    }, 2200);
};
