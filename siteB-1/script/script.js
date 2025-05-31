window.onload = () => {
    // gnb
    const navList = document.querySelector('.gnb > ul');
    navList.addEventListener('mouseover', () => {
        document.querySelectorAll('.submenu').forEach((sub) => {
            sub.style.height = '200px';
        });
    });
    navList.addEventListener('mouseout', () => {
        document.querySelectorAll('.submenu').forEach((sub) => {
            sub.style.height = '0';
        });
    });
    // sliders
    let currentIndex = 0;
    const sliderWrap = document.querySelector('.slider_wrap');
    const slider = document.querySelectorAll('.slider');
    // const firstClone = firstElement.clone();

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = 'all 0.3s';
        sliderWrap.style.marginTop = -currentIndex * 300 + 'px';
    }, 3000);
    if (slider.length == 3) {
        setTimeout(() => {
            sliderWrap.style.transition = '0';
            currentIndex = 0;
        }, 700);
    }
};
