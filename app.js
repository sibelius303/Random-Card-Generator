const icono = document.querySelector('.icono');
const icono1 = document.querySelector('#icono1');
const numero = document.querySelector('#numero');

const iconoText = ['♥','♦','♣','♠'];
const numeroText = ['3','5','6','9','A']
const iconoRandom = Math.floor(Math.random()*iconoText.length);

function randomNumero (){
    let numeroRandom = Math.floor(Math.random()*numeroText.length);
    return numeroText[numeroRandom];
}
icono.innerHTML=iconoText[iconoRandom];
icono1.innerHTML=iconoText[iconoRandom];
numero.innerHTML=randomNumero();