//pegando o elemento do html e atribuindo a uma variavel

const $header = document.querySelector('header');
//assim pegando o imagem
const $logo = document.querySelectorAll('.logo')[0];

const $nav = document.querySelectorAll('.nav-bar')[0];  
//pega a rolagem da tela e transforma e um valor recebidoa
window.addEventListener('scroll', toggleHeader, false)

function toggleHeader(){
    if(window.pageYOffset > $logo.offsetHeight && $nav.classList.contains('abs-pos')){
        $nav.classList.remove('abs-pos')
        $nav.classList.add('fix-pos')
    }else if(window.pageYOffset <= $logo.offsetHeight && $nav.classList.contains('fix-pos')){
        
        $nav.classList.remove('fix-pos')
        $nav.classList.add('abs-pos')
    }
}

//<a href="https://www.blogger.com/about/?bpli=1" target="_blank">


//essa função serve para criar links diretamente no javascript  
//const $extLink = document.querySelectorAll('.ext-link')[0];

//$extLink.addEventListener('click', openLink = () => {
//    window.open('https://www.blogger.com/about/?bpli=1', '_blank')
//}, false);

//const $intLink = document.querySelectorAll('.int-link')[2];
//const $transparencia = document.querySelector('#transparencia');
//a função window.scrollTo recebe dois paremetros (x, y) sendo x a posição da direta para esquerda
//e y cima para baixo
//$intLink.addEventListener('click', () => {
    // window.scrollTo(0, $transparencia.offsetTop - $nav.offsetHeight);
    // a função também aceita um objeto, sendo top oque cordena na onde ele vai ir para baixo ou em cima
    //left é x
    //behavior é o comportamento, sendo auto o rapido e smooth suave
 //   window.scrollTo({
 //       top: $transparencia.offsetTop - $nav.offsetHeight,
 //       left: 0,
   //     behavior: 'smooth'
  //  });
//}, false)



//essa função criada serve para não ter que escrever varias funções para os links
//como cada index está horientado a outro, esse for each já vai fazer a função com todos 
const $intLinks = document.querySelectorAll('.int-link a');

$intLinks.forEach(function(cur, idx) {
    cur.addEventListener('click', (evt) => {
        //esse metodo proibi o HTML de executar funções padrões no codigo
        evt.preventDefault();
        window.scrollTo({
            //para passar pra função o link que está no HTML e fazer o javascript executar ele
                   top: document.querySelector(cur.getAttribute('href')).offsetTop - $nav.offsetHeight,
                   left: 0,
                   behavior: 'smooth'
          });
    }, false);
});
