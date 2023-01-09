const OTPInputFunction = () => {
  const inputs = document.querySelectorAll("#otp > *[id]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        inputs[i].value = "";
        if (i !== 0) inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== "") {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
};
OTPInputFunction();






var swiper1 = new Swiper(".tabSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  slidesPerView: 5,
  breakpoints: {
    1024: {
      width: 1024,
      slidesPerView: 5,
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
  // loop: true,
  // loopFillGroupWithBlank: true,
});

var swiper2 = new Swiper(".tabContent1", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".page1",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
var swiper3 = new Swiper(".tabContent2", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".page2",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
var swiper4 = new Swiper(".tabContent3", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".page3",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

var swiper5 = new Swiper(".tabContent4", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".page4",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
var swiper6 = new Swiper(".tabContent5", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".page5",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

// popular courses slider end

// Featured Course This Month started
var swiper7 = new Swiper(".featuredSlider", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".featuredPage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// Featured Course This Month ended

// Highest Selling Courses started
var swiper8 = new Swiper(".highestSelling", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".highestSellingPage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// Highest Selling Courses started

//   Learn A New Skill In Short Courses started 
var swiper9 = new Swiper(".skillCourse", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".skillCoursePage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
//  Learn A New Skill In Short Courses end

// Instructor started
var swiper10 = new Swiper(".quotationSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: ".skillCoursePage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

// Instructor ended


//  Jquery Started 

$(document).ready(function () {

  // navbar started

$(".mobile-top-bar button, .mobile_menu_content button").click(function () {
  var mobile_menu_content_name = $(this).attr("data-action");

  $("body").addClass("body_scroll_lock");

  // If go to home then scroll is available -----------
  $(".mobile_menu_content").removeClass("mobile_content_switch");

  $("." + mobile_menu_content_name).toggleClass("mobile_content_switch");
});

$(".close-menu").click(function () {
  $(".mobile_menu_content").removeClass("mobile_content_switch");
  $("body").removeClass("body_scroll_lock");
});

// navbar end



// Most Popular Course by Department started 
$("#tabs-nav li:first-child").addClass("active");
$(".tab-content").hide();
$(".tab-content:first").show();

// Click function
$("#tabs-nav li").click(function () {
  $("#tabs-nav li").removeClass("active");
  $(this).addClass("active");
  $(".tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
// Most Popular Course by Department end


 // Instructor started
  $(".tabs-instructor a").click(function () {
    $(".panel").hide();
    $(".tabs-instructor a.active").removeClass("active");
    $(this).addClass("active");

    var panel = $(this).attr("href");
    $(panel).fadeIn(1000);

    return false;
  });

  $(".tabs-instructor li:first a").click();
// Instructor ended


// All courses filter sidebar started 
$("#filter-btn").on("click", function () {
  $(".sidebar-overlay").addClass("show");
  $(".sidebar").addClass("show");
});
$("#close-filter").on("click", function () {
  $(".sidebar-overlay").removeClass("show");
  $(".sidebar").removeClass("show");
});
$(".sidebar-overlay").on("click", function () {
  $(this).removeClass("show");
  $(".sidebar").removeClass("show");
});
// All courses filter sidebar started 


// courses details FAQ started

  $(".acc-container .acc:nth-child(1) .acc-head").addClass("active");
  $(".acc-container .acc:nth-child(1) .acc-content").slideDown();
  $(".acc-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".acc-content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".acc-content").slideUp();
      $(".acc-head").removeClass("active");
      $(this).siblings(".acc-content").slideToggle();
      $(this).toggleClass("active");
    }
  });

// courses details FAQ end


// course content accordion  started/ course details

  $(".accordion-container .accordion:nth-child(1) .accordion-head").addClass(
    "show"
  );
  $(
    ".accordion-container .accordion:nth-child(1) .accordion-content"
  ).slideDown();
  $(".accordion-head").on("click", function () {
    $(this).siblings(".accordion-content").slideToggle();
    $(this).toggleClass("show");
  });

// course content accordion end


// scrollspy started/  course details

  var sectionIds = $("a.nav-link-scrollspy");

  $(document).scroll(function () {
    sectionIds.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();

      if (
        scrollPosition < containerBottom - 100 &&
        scrollPosition >= containerOffset - 100
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });

// scrollspy end


// My courses started

  $(".tabs-course a").click(function () {
    $(".panel").hide();
    $(".tabs-course a.active").removeClass("active");
    $(this).addClass("active");

    var panel = $(this).attr("href");
    $(panel).fadeIn(1000);

    return false; // prevents link action
  }); // end click

  $(".tabs-course li:first a").click();

// My courses end



// privacy policy started
// Show the first tab and hide the rest
$("#tabs-nav-privacy li:first-child").addClass("active");
$(".privacy-tab-content").hide();
$(".privacy-tab-content:first").show();

// Click function
$("#tabs-nav-privacy li").click(function () {
  $("#tabs-nav-privacy li").removeClass("active");
  $(this).addClass("active");
  $(".privacy-tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
// privacy policy end



// My Profile started
// Show the first tab and hide the rest
$("#tabs-nav-profile li:first-child").addClass("active");
$(".profile-tab-content").hide();
$(".profile-tab-content:first").show();

// Click function
$("#tabs-nav-profile li").click(function () {
  $("#tabs-nav-profile li").removeClass("active");
  $(this).addClass("active");
  $(".profile-tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
// My Profile end


// video modal started
$(".preview-btn").click(function () {
  $(".modal").addClass("flex").removeClass("hidden");
  $("body").addClass("overflow-hidden");
});
$(".close-modal, .modal-overlay").click(function () {
  $(".modal").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});
// video modal end


// nice selector started 
$('.courses').select2({
  // multiple:true 
});
// nice selector end 



});

//  Jquery end









// $('.explore-menu').mouseenter(function(){
//   $('.mega-menu').addClass("show");
//   $(this).addClass('active');
// })
// $('.explore-menu').mouseleave(function(){
//   $('.mega-menu').removeClass("show");
//   $(this).removeClass('active');
// })



// let element = document.getElementsByClassName('elementWidth');

// for(let i = 0; i < element.length; i++){

//   $(element[i]).mouseenter(function(){
//     console.log('offsetWidth', element[i].offsetWidth);
//     console.log('scrollWidth', element[i].scrollWidth);
//     console.log('clientWidth', element[i].clientWidth);
  
//     if(element[i].offsetWidth < element[i].scrollWidth){
//       $('.hoverDiv').removeClass('right-full left-full')
//       console.log('true');
//       $(this).find('.hoverDiv').addClass('left-full');
//     }
//     else{
//       $('.hoverDiv').removeClass('left-full right-full')
//       console.log('false');
//       $(this).find('.hoverDiv').addClass('right-full');
//     }
//   });
// }

$('.action-btn').click(function(){
  // $(this).parent().find('.action').toggle();
  $(this).parent().find('.action').toggle();
})


$('.add-card').click(function(){
  $('.card-area').toggle();
});


// Add to card modal started
$(".add-card").click(function () {
  $(".modal").addClass("flex").removeClass("hidden");
  $("body").addClass("overflow-hidden");
});
$(".modal-overlay, .cancel").click(function () {
  $(".modal").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});
// Add to card modal end


// Remove card modal started
$(".remove-account").click(function () {
  $(".modal").addClass("flex").removeClass("hidden");
  $("body").addClass("overflow-hidden");
});
$(".modal-overlay, .remove-cancel").click(function () {
  $(".modal").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});
//  Remove card modal end

// certificate modal started 
$(".certificate-open").click(function () {
  $(".modal").addClass("flex").removeClass("hidden");
  $("body").addClass("overflow-hidden");
});
$(".modal-overlay, .certificate-close").click(function () {
  $(".modal").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});
// certificate modal end 