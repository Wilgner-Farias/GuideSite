
const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function slide() {
    idx++;
    if(idx > img.length - 1) {
        idx = 0;
    }


    imgs.style.transform = `translateX(${- idx * 250}px)`;
}

setInterval(slide, 2000);


function abrirWhatsapp() {
    var nome = document.getElementById('nome').value;
    var msg = document.getElementById('msg').value;
    var url = "https://wa.me/5511974739209?text="
      + "Olá, tudo bem?" + "%0a" 
      + "%0a" 
      + "O meu nome é " + nome + "%0a" 
      + "e gostaria de um orçamento de " + msg;
    window.open(url, '_blank').focus();
  }

  // menu
  let menu = document.querySelector('.menu-options-div');

  function menuButton() {
    if (menu.style.display === 'flex') {
      menu.classList.add('menu-fechar');
      setTimeout(() => {
        menu.style.display = 'none'
      },900)
    } else {
      menu.classList.remove('menu-fechar');
      menu.style.display = 'flex'
    }
  }


function boxOrc() {
  var nome = document.getElementById('nome').value;
  var box = document.getElementById('box').value;
  var vidro = document.getElementById('vidro').value;
  var aluminio = document.getElementById('aluminio').value;
  var medida = document.getElementById('medida').value;
  var url = "https://wa.me/5511974739209?text="
    + "Olá, tudo bem?" + "%0a"
    + "%0a"
    + "O meu nome é " + nome + "%0a"
    + "Gostaria de solicitar um orçamento de: " + "%0a"
    + "um box: " + box + "%0a"
    + "cor do vidro: " + vidro + "%0a"
    + "cor do alumínio: " + aluminio + "%0a"
    + "medida: " + medida;
  window.open(url, '_blank').focus();
}

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
