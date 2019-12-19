 const windowHeight = $(window).height();
$(window).on(`scroll`, function () {
    if (pageYOffset >= windowHeight) {
        $(`#btn-up`).css(`display`, `block`);
    } else {
        $(`#btn-up`).css(`display`, `none`);
    }
});
$(`#btn-up`).on(`click`, function () {
    event.preventDefault();
    $('body,html').animate({'scrollTop': `0`}, 1000);
});

   $('.multiple-items').slick({
      infinite: true,
       slidesToShow: 3,
      slidesToScroll: 1
    });

