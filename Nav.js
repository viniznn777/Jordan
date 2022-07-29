let btnOpen = document.getElementById('btnOpen');

let btnClose = document.getElementById('btnClose');

let menuMobile = document.getElementById('mobile');

let sideBarOpen = false;

btnOpen.addEventListener('click', () => {
    menuMobile.style.marginLeft = '0vw';
    menuMobile.style.animationName = 'SideBar';
    sideBarOpen = true;
});

btnClose.addEventListener('click', () => {
    menuMobile.style.marginLeft = '-300vw';
    menuMobile.style.animationName = '';
    sideBarOpen = false;
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 596 && sideBarOpen) {
        menuMobile.style.marginLeft = '-100vw';
    };
});