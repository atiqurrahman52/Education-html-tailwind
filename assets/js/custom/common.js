const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

if (button) {
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// popular courses slider started

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
var swiper = new Swiper(".tabContent6", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".page6",
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
      spaceBetween: 10,
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
