$('#slider').slick({
    arrows: false,
    dots: true
});

$('.list-pro-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1158,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 864,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 586,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});