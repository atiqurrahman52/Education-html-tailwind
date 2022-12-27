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

// const button = document.querySelector("#menu-button");
// const menu = document.querySelector("#menu");

// if (button) {
//   button.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//   });
// }

// popular courses slider started

// course details started
// $(document).ready(function(){

// 	$('ul.tabsCourse li').click(function(){
// 		var tab_id = $(this).attr('data-tab');

// 		$('ul.tabsCourse li').removeClass('current');
// 		$('.course-tab-content').removeClass('current');

// 		$(this).addClass('current');
// 		$("#"+tab_id).addClass('current');
// 	})

// })
// course details end
// Show the first tab and hide the rest
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

// Featured slider started
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
// Featured slider ended

// Highest slider started
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
// Highest slider started

//   Learn a New Skill  courses Courses started -->
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
//  Learn a New Skill  courses Courses end

// Instructor started

$(document).ready(function () {
  //alert('here');

  $(".tabs-instructor a").click(function () {
    $(".panel").hide();
    $(".tabs-instructor a.active").removeClass("active");
    $(this).addClass("active");

    var panel = $(this).attr("href");
    $(panel).fadeIn(1000);

    return false;
  });

  $(".tabs-instructor li:first a").click();
});

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

// courses details FAQ
$(document).ready(function () {
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
});

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

// $('.explore-menu').mouseenter(function(){
//   $('.mega-menu').addClass("show");
//   $(this).addClass('active');
// })
// $('.explore-menu').mouseleave(function(){
//   $('.mega-menu').removeClass("show");
//   $(this).removeClass('active');
// })

// course content started
$(document).ready(function () {
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
});
// course content end

// video modal started
$(".preview-btn").click(function () {
  $(".modal").addClass("flex").removeClass("hidden");
  $("body").addClass("overflow-hidden");
});
$(".close-modal, .modal-overlay").click(function () {
  $(".modal").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});
// video modal started

// scrollspy started
$(document).ready(function () {
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
});
// scrollspy end

// My courses started

$(document).ready(function () {
  $(".tabs-course a").click(function () {
    $(".panel").hide();
    $(".tabs-course a.active").removeClass("active");
    $(this).addClass("active");

    var panel = $(this).attr("href");
    $(panel).fadeIn(1000);

    return false; // prevents link action
  }); // end click

  $(".tabs-course li:first a").click();
}); // end ready

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
