const loader = document.querySelector('.lds-dual-ring');

var elems = document.querySelectorAll('.main, .header, .footer');
var index = 0,
    length = elems.length;

function init() {

    /*Carga de loader de inicio y transicion-delay a la web*/
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        for (; index < length; index++) {
            elems[index].style.display = "block";
        }
    }, 3000);
}
init();
