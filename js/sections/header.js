
const header = () => {
    document.querySelector('.header__menu-mobile__hamburger').addEventListener('click', function (e) {
        document.querySelector('.header__menu-mobile__items').classList.toggle('mobile-active')
        if (this.classList.contains('hamburger-rotate-in')) {
            this.classList.remove('hamburger-rotate-in');
            this.classList.add('hamburger-rotate-out');
        } else {
            this.classList.remove('hamburger-rotate-out');
            this.classList.add('hamburger-rotate-in');
        }
        document.querySelector('.header__menu-mobile__icon').classList.toggle('header__menu-mobile__icon-active');
        if (this.firstElementChild.classList.contains('header__menu-mobile__icon-active')) {
            document.querySelector('.header__menu-mobile__icon').src = '/assets/close-icon.svg'
        } else {
            document.querySelector('.header__menu-mobile__icon').src = '/assets/menu.svg'
        }
    });
};

export default header;
