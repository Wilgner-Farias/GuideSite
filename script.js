// Orçamento Rápido

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

// 

// Atribuição de botões e janelas

// function abrirInfo1() {
//   // document.querySelector('.info-1-content').style.display = 'block';
//   console.log('Ok')
// }


// Não tocar
function abrirInfo1() {
  document.querySelector('.info-1-content').style.display = 'block';
  document.querySelector('.info-1-div').style.display = 'flex';
};


function fecharInfo1() {
  document.querySelector('.info-1-content').style.display = 'none';
  document.querySelector('.info-1-div').style.display = 'none';
};