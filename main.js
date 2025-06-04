var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween:20,
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },

  breakpoints:{
    0:{
      slidePerView:1,
    },
    768:{
      slidePerView:2,
    },
    1020:{
      slidePerView:3,
    },
  },
});