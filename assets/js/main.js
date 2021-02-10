$('.mt-billboard-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  autoplay: true,
  cssEase: 'linear'
});

$('.objective-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  autoplay: true,
  cssEase: 'linear'
});

//Navbar Fixed
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  // console.log(header)
  if (scroll > 0) {
    $("body").addClass('mt-header_fixed');
  } else {
    $("body").removeClass('mt-header_fixed');
  }
});


$(document).on('click', '.ham-menu', function () {
  $('.ham-menu').toggleClass('active');
  $('.main-menu').toggleClass('active');
});
$(document).on('click', '.sub_toggle', function () {
  $('.menu-item-has-children ~ .sub-menu').toggleClass('active');
});

//submenu mobile menu
$('.main-menu .menu-item-has-children > a').each(function () {
  $(this).after("<span class='sub_toggle'><i class='icon'></i></span>");
});
$(document).on('click', 'span.mt-sub_toggle', function () {
  $(this).next('ul.sub-menu').slideToggle();
});

// product details item img slider

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-for',
  focusOnSelect: true,
});

tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on('resize', function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    tabControl();
  }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if (tabs.is(':visible')) {
    tabs.find('a').on('click', function (event) {
      event.preventDefault();
      var target = $(this).attr('href'),
        tabs = $(this).parents('.tabs'),
        buttons = tabs.find('a'),
        item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.item').on('click', function () {
      var container = $(this).parents('.tabbed-content'),
        currId = $(this).attr('id'),
        items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
    });
  }
}