//pegando o elemento do html e atribuindo a uma variavel

const $header = document.querySelector('header');

//como a div logo tem dentro dela a imagem, se pega a div e o primeiro elemento dela [0]
//assim pegando o imagem
const $logo = document.querySelectorAll('.logo')[0];

const $nav = document.querySelectorAll('.nav-bar')[0];   

//pega a rolagem da tela e transforma e um valor recebido
window.addEventListener('scroll', toggleHeader, false)

function toggleHeader(){
    //window.pageYOffset indica que o valor que quer receber é somente Y, verticalmente
    //ele recebe isso em pixels
    if(window.pageYOffset > 100 && $header.classList.contains('max-header')){

        //classList é um metodo que pode adicionar ou remover uma classe do elemento
        $header.classList.remove('max-header');
        $header.classList.add('min-header');

        //esse metodo seta no src outra imagem 
        $logo.firstElementChild.setAttribute('src', 'Omnitech/imgs/omnitech-logo-2.png')

        $nav.classList.remove('max-nav');
        $nav.classList.add('min-nav');

    }else if(window.pageYOffset <= 100 && $header.classList.contains('min-header')){
        $header.classList.remove('min-header');
        $header.classList.add('max-header');

        //esse metodo ´pega o primeiro elemento tag, e setAttribute seta o valor desse campo
        $logo.firstElementChild.setAttribute('src','Omnitech/imgs/omnitech-logo-1.png')

        $nav.classList.add('max-nav');
        $nav.classList.remove('min-nav');
    };
};

