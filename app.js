const icono = document.querySelector('.icono');
const icono1 = document.querySelector('#icono1');
const numero = document.querySelector('#numero');

const iconoCorazon = '♥';
const iconoDiamante = '♦';

const iconoText = [iconoCorazon,iconoDiamante,'♣','♠'];
const numeroText = ['3','5','6','9','A']
const iconoRandom = Math.floor(Math.random()*iconoText.length);

function randomNumero (){
    let numeroRandom = Math.floor(Math.random()*numeroText.length);
    return numeroText[numeroRandom];
}

if (iconoText[iconoRandom] === iconoCorazon) {
    icono.style.color = 'red';
    icono1.style.color = 'red';
} else if (iconoText[iconoRandom] === iconoDiamante) {
    icono.style.color = 'red';
    icono1.style.color = 'red';
} else {
    icono.style.color = 'black';
    icono1.style.color = 'black';
}

icono.innerHTML=iconoText[iconoRandom];
icono1.innerHTML=iconoText[iconoRandom];
numero.innerHTML=randomNumero();