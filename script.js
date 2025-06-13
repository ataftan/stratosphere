$('.husk').each(function () {
  const $container = $(this);
  const $touched = $container.find('.touched');
  const $burst = $container.find('.burst');
  const offsetX = parseInt($container.data('offset-x')) || 0;
  const offsetY = parseInt($container.data('offset-y')) || 0;

  $touched.on('mouseenter', function () {
    $burst.css('opacity', 1);
  });

  $touched.on('mousemove', function (e) {
    $burst.css({
      left: e.clientX + offsetX + 'px',
      top: e.clientY + offsetY + 'px'
    });
  });

  $touched.on('mouseleave', function () {
    $burst.css('opacity', 0);
  });
});

$(".i").on("click", function () {
  const $txt = $("#txt");
  if ($txt.is(":visible")) {
    $txt.hide();
    $("#txt span").html("");
  } else {
    const text = $(this).find(".hidden-letter").text();
    $("#txt span").html(text);
    $txt.show();
  }
});




// $("body").on("click", function (e) {

//   if ($(e.target).closest(".hypertext").length > 0) {
//     return; // do nothing if clicked inside about button
//   }
//   $(this).toggleClass("toggled");

//   if ($(this).hasClass("toggled")) {
//     $('#pre-txt').fadeIn();
//   } else {
//     $('#pre-txt').fadeOut();
//   }
// });
