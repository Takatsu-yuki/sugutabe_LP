'use strict'; 



  $(function(){
    $('.section-reviews__slik').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'dots-class',
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
          }
        },
      ],
    });    
});//jQuery


//accordion panel
const accordion = document.querySelectorAll('.accordion');
const details = document.querySelectorAll('.section-FAQ__details');
console.log(accordion);

for(let i = 0; i < accordion.length; i ++ ){
  accordion[i].addEventListener('click',function(){
  accordion[i].classList.toggle('open');
  details[i].classList.toggle('open');
}); 
}

//navigation
const navigation = document.querySelector('.navigation');
const openBtn = document.getElementById('open-button');
const navigationTitle = document.querySelectorAll('.navigation-title');


openBtn.addEventListener('click',function(){
  openBtn.classList.toggle('open');
  navigation.classList.toggle('open')
});

for(let i = 0; i < navigationTitle.length; i ++ ){
navigationTitle[i].addEventListener('click',function(){
  openBtn.classList.remove('open');
  navigation.classList.remove('open')
});
}

console.log(openBtn);




