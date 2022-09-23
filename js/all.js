function scrollAnimate () {
  $(document).ready(function () {
    $('.nav-link').click(function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      $('body,html').animate({ scrollTop: targetPos }, 1000);
    });
  });
}
scrollAnimate();