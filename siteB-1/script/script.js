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
    const firstClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(firstClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = 'all 0.6s';
        sliderWrap.style.marginTop = -currentIndex * 300 + 'px';
        if (currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.transition = '0s';
                sliderWrap.style.marginTop = '0';
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
};
