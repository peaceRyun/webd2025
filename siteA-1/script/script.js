window.onload = () => {
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
};
