window.onload = () => {
    const ul = document.querySelector('.gnb > ul');
    ul.addEventListener('mouseover', () => {
        document.querySelector('#header').classList.add('on');
    });
    ul.addEventListener('mouseout', () => {
        document.querySelector('#header').classList.remove('on');
    });
};
