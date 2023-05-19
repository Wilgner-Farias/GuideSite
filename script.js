

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

