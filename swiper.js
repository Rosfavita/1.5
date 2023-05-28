var swiper = null; // Переменная для хранения экземпляра Swiper

function handleResize() {
    var windowWidth = window.innerWidth;
    let element = document.getElementsByClassName('check-width')
    let element2 = document.getElementsByClassName('brands-list__navigation')
    if (windowWidth > 768) {
        if (swiper) {
            swiper.destroy(); // Уничтожение Swiper
            swiper = null;
        }
        for (let i = 0; i < element.length; i++){
            element[i].classList.remove('swiper-slide');
        }
        element2[0].classList.remove('swiper-wrapper')
    } else {
        element2[0].classList.add('swiper-wrapper');
        if (!swiper) {
            swiper = new Swiper('.mySwiper',{
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }
        for (let i = 0; i < element.length; i++){
            element[i].classList.add('swiper-slide');
        }

    }
}

window.addEventListener('resize', handleResize);
handleResize();

let button = document.querySelector('.brands-list__button-next');
let pcBrands = document.getElementsByClassName('brands-list__pc');
let buttonHide = document.querySelector('.brands-list__button-next-hide')

button.addEventListener('click', function() {
    if (pcBrands[0].style.display = 'none'){
        for(let i = 0; i < pcBrands.length; i++){
            pcBrands[i].style.display = 'block';
        }
    }
    button.style.display = 'none';
    buttonHide.style.display = 'flex';
});
buttonHide.addEventListener('click', function() {
    if (pcBrands[0].style.display = 'block'){
        for(let i = 0; i < pcBrands.length; i++){
            pcBrands[i].style.display = 'none';
        }
    }
    buttonHide.style.display = 'none';
    button.style.display = 'flex';
});

