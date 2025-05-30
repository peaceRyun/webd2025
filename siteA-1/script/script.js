window.onload = () => {
    //gnb
    const navList = document.querySelector('.nav ul');
    navList.addEventListener('mouseover', () => {
        document.querySelectorAll('.submenu').forEach((sub) => {
            sub.style.height = '200px';
        });
    });
    navList.addEventListener('mouseout', () => {
        document.querySelectorAll('.submenu').forEach((sub) => {
            sub.style.height = '0px';
        });
    });

    //슬라이더
    let currentIndex = 0; //현재 이미지 설정
    const sliderWrap = document.querySelector('.sliderWrap'); //전체 이미지
    const slider = document.querySelectorAll('.slider'); //각각의 이미지
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true); //첫번째 이미지 저장
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        //3초에 한번씩 실행
        currentIndex++; //현재 이미지 1씩 증가
        sliderWrap.style.transition = 'all 0.6s'; //에니메이션 추가
        sliderWrap.style.marginTop = -currentIndex * 300 + 'px'; //이미지 이동

        if (currentIndex == slider.length) {
            //마지막 이미지
            setTimeout(() => {
                sliderWrap.style.transition = '0s'; //애니메이션 정지
                sliderWrap.style.marginTop = '0'; //이미지 위치 초기화
                currentIndex = 0; //현재 이미지 초기화
            }, 700);
        }
    }, 3000);

    //팝업
    const btnOpen = document.querySelector('.btn_open');
    const btnClose = document.querySelector('.btn_close');
    btnOpen.addEventListener('click', () => {
        document.querySelector('.tab_pop').classList.add('on');
    });
    btnClose.addEventListener('click', (e) => {
        e.preventDefault;
        document.querySelector('.tab_pop').classList.remove('on');
    });

    //탭
    let tabs = document.querySelectorAll('.tabs > a');
    let tab_contents = document.querySelectorAll('.tab_contents > ul');
    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            //탭기능 활성화
            tabs[0].classList.remove('on');
            tabs[1].classList.remove('on');
            tab.classList.add('on');
            //탭내용변경
            tab_contents[0].classList.remove('on');
            tab_contents[1].classList.remove('on');
            tab_contents[index].classList.add('on');
        });
    });
};
