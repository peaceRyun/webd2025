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
        sliderWrap.style.marginLeft = -currentIndex * 100 + '%';
        if (currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.transition = '0s';
                sliderWrap.style.marginLeft = '0';
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    //pop
    const popOpen = document.querySelector('.pop_open');
    const popClose = document.querySelector('.pop_close');
    popOpen.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.pop_wrap').classList.add('on');
    });
    popClose.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.pop_wrap').classList.remove('on');
    });

    //tab
    const noticeBtn = document.querySelector('.notice');
    const galleryBtn = document.querySelector('.gallery');
    const noticeCont = document.querySelector('.notice_cont');
    const galleryCont = document.querySelector('.gallery_cont');

    noticeBtn.addEventListener('click', () => {
        noticeBtn.classList.remove('on');
        galleryBtn.classList.remove('on');
        noticeCont.classList.remove('on');
        galleryCont.classList.remove('on');
        noticeBtn.classList.add('on');
        noticeCont.classList.add('on');
    });
    galleryBtn.addEventListener('click', () => {
        noticeBtn.classList.remove('on');
        galleryBtn.classList.remove('on');
        noticeCont.classList.remove('on');
        galleryCont.classList.remove('on');
        galleryBtn.classList.add('on');
        galleryCont.classList.add('on');
    });
};
