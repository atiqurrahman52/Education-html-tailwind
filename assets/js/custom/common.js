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



var swiper = new Swiper(".tabSlider", {
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

var swiper = new Swiper(".tabContent1", {
  // spaceBetween: 20,
  // slidesPerView: 4,
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
var swiper = new Swiper(".tabContent2", {
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
var swiper = new Swiper(".tabContent3", {
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

var swiper = new Swiper(".tabContent4", {
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
var swiper = new Swiper(".tabContent5", {
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

// popular courses slider end

// Featured slider started
var swiper = new Swiper(".featuredSlider", {
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
var swiper = new Swiper(".highestSelling", {
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
var swiper = new Swiper(".skillCourse", {
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

$(document).ready(function() {
    
  //alert('here');

$('.tabs a').click(function(){

   $('.panel').hide();
   $('.tabs a.active').removeClass('active');
   $(this).addClass('active');
   
   var panel = $(this).attr('href');
   $(panel).fadeIn(1000);
   
   return false;  // prevents link action
  
});  // end click 

   $('.tabs li:first a').click();
   
}); // end ready

var swiper = new Swiper(".quotationSwiper", {
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

$('#filter-btn').on('click', function(){
  $('.sidebar-overlay').addClass('show');
  $('.sidebar').addClass('show');
});
$('#close-filter').on('click', function(){
  $('.sidebar-overlay').removeClass('show');
  $('.sidebar').removeClass('show');
});
$('.sidebar-overlay').on('click', function(){
  $(this).removeClass('show');
  $('.sidebar').removeClass('show');
});




// coursem details FAQ 
$(document).ready(function() {
  $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
  $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
  $('.acc-head').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.acc-content').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.acc-content').slideUp();
        $('.acc-head').removeClass('active');
        $(this).siblings('.acc-content').slideToggle();
        $(this).toggleClass('active');
      }
  });     
  });



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
})