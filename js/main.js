
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.slider__img-btn'
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay:{
        deley: 10000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed:800,
})
//show&hide plus
const plus = document.querySelectorAll('.faq__question-btn'),
      text = document.querySelectorAll('.faq__question-descr'),
      title = document.querySelectorAll('.faq__question-text');

function hideContent(){

    [...plus].forEach(item=> item.children[0].classList.remove('question__active-btn'));
    [...title].forEach(item=> item.classList.remove('color__active'));
    [...text].forEach(item=> {
                    item.classList.add('text__hiden')
                    item.classList.remove('text__show')
    });


} 

function showContent(i=0){

    plus[i].children[0].classList.add('question__active-btn');
    title[i].classList.add('color__active');
    text[i].classList.add('text__show');

}

[...plus].forEach(function(item,i){
    item.addEventListener('click', function(){
          
        hideContent()
        showContent(i)
    });
})

hideContent()
showContent()

const file = document.querySelector('.input__file'),
      span = document.querySelector('.input__clip span');

file.addEventListener('change' , function(){
    span.innerHTML = `${file.value}` 
});

//menu burger

const burgerbtn = document.querySelector('.burger__menu'),
      redBg = document.querySelector('.menu__mob-bg-red'),
      activeContent = document.querySelector('.menu__mob-wrap'),
      logo =  document.querySelector('.main__logo-mob');

burgerbtn.addEventListener('click', function(){
   
    burgerbtn.classList.toggle('active__bureger');
    redBg.classList.toggle('active__red-bg');
    activeContent.classList.toggle('active__mob-wrap');
    logo.classList.toggle('active__logo');
});