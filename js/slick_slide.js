// 슬릭슬라이더 (시작)

$(".header_logoAd_slide").slick({
  autoplay: true,
  dots: false,
  Infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

$(".mainSlide .slideInner").slick({
  autoplay: true,
  dots: true,
  Infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

$(".introduction .cardbox_02 .slideInner").slick({
  autoplay: true,
  dots: true,
  Infinite: true,
  arrows: false,
  speed: 500,
});

$(".advertisingSlide .slideInner").slick({
  autoplay: true,
  dots: true,
  Infinite: true,
  arrows: false,
  speed: 500,
});

$(".popupbox .slideInner").slick({
  autoplay: true,
  dots: true,
  Infinite: true,
  arrows: false,
  speed: 1000,
  fade: true,
  cssEase: "linear",
});

$(".relationship .slideInner").slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

document.querySelector(".mainSlide .slick-dots li:nth-child(1)").textContent =
  "전문의 2인 진료";
document.querySelector(".mainSlide .slick-dots li:nth-child(2)").textContent =
  "우리가족 좋은 주치의";
document.querySelector(".mainSlide .slick-dots li:nth-child(3)").textContent =
  "환자중심 치료!";

// 슬릭슬라이더 (끝)
