const slickSlide = jQuery("#slick-slide");
//슬릭 슬라이드는 jQuery 기반 라이브러리
//https://kenwheeler.github.io/slick/

if (slickSlide) {
  slickSlide.slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slideToScroll: 1, //몇개가 슬라이드 되는지
    autoplay: true, //자동슬라이드
    autoplaySpeed: 3000, // 밀리세컨드
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, //모바일사이즈는 1개만 보여줌
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }); //오브젝틀로 넣어줌
}
