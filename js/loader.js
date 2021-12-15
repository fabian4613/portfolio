const loader = document.querySelector('.lds-dual-ring');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const body = document.querySelector('.body');

function init() {
    /*Carga de loader de inicio y transicion-delay a la web*/
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'block';
        header.style.display = 'block';
        footer.style.display = 'block';
        body.style.background = "var(--body-color)";
    }, 3000);
}
init();
