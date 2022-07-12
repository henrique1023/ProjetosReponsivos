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

// const $imgs = document.getElementById('img');
 const $img = document.querySelectorAll('#img img');

let index = 1;
document.getElementById("radio1").checked = true;

function carrossel(){
    index ++;

    if(index > $img.length){
        index = 1;
    }
    document.getElementById("radio" + index).checked = true;
    // $imgs.style.transform = `translateX(${-index * 1200}px)`;
}

setInterval(carrossel, 2500);