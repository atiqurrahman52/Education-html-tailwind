const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

if(button){
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}


var swiper = new Swiper(".tabSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },
  spaceBetween:20,
  // slidesPerView: 5,
  breakpoints: {
    1024: {
      width: 1024,
      slidesPerView: 3,
    },
    768: {
      width: 768,
      slidesPerView: 4,
    },
    425: {
      width: 425,
      slidesPerView: 3,
    },
    320: {
      width: 320,
      slidesPerView: 2,
    },
  },
  loop:true,
  loopFillGroupWithBlank: true,
});

var swiper = new Swiper(".tabContent1", {
  spaceBetween:20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
var swiper = new Swiper(".tabContent2", {
  spaceBetween:20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
var swiper = new Swiper(".tabContent3", {
  spaceBetween:20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
var swiper = new Swiper(".tabContent4", {
  spaceBetween:20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});



// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});