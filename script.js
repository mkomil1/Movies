// new WOW().init();

let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");



window.addEventListener("scroll" , () => {
  header.classList.toggle('shadow', window.scrollY > 0);
 
})


menu.onclick = function () {
  menu.classList.toggle("fa-times")
  navbar.classList.toggle("active")
}

window.onscroll = function () {
  menu.classList.remove("fa-times")
  navbar.classList.remove("active")
}

var swiper = new Swiper(".home", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });

  // swiper

  // var swiper = new Swiper(".home", {
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  
  // });


  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });




