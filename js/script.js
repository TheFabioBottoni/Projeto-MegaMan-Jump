const megaman = document.querySelector('.megaman'); /* vamos pegar o elemento da imagem do mario. o querySelector vamos passar um seletor CSS */
const fireball = document.querySelector('.fireball');


const jump = () => {
    megaman.classList.add('jump') /* vamos adicionar a classe na imagem */

    setTimeout(() => {
        megaman.classList.remove('jump')
    }, 500);
} /* repare que só conseguimos pular apenas uma vez , pois a animaçao já acabou. Então devemos remover a class e colocar ela novamente. A animação de pulo tem 500ms, então devemos dar um tempo a ela acontecer e depois remover a class. usamos o setTimeout que vai receber uma função para fazer algo e o tempo. A função é remover a class jump depois dos 500ms. e depois colocamos os 500 dos 500ms. */

const loop = setInterval(()=>{
    console.log('loop')

    const fireballPosition = fireball.offsetLeft;
    const megamanPosition = +window.getComputedStyle(megaman).bottom.replace('px', '');
   
    if(fireballPosition <= 50  && fireballPosition > 0 && megamanPosition < 80) {
        fireball.style.animation = 'none';
        fireball.style.left = `${fireballPosition}px`; 
        fireball.style.display = 'none';
        

        megaman.style.animation = 'none'; 
        megaman.style.bottom = `${megamanPosition}px`;

        megaman.src ='images/explosao.png';
        megaman.style.width = '100px';

        clearInterval(loop);

    }
},10); /* criamos um loop para ter uma verificação a cada momento para ver se o personagem enconstou no objeto. usamos o setInterval e colocamos dois parâmetros também. a função e o intervalo de tempo que essa função será executada.*/

document.addEventListener('keydown', jump); /* adicionamos um evento de keydown, de pressionar a tecla, ai executará a função jump*/
