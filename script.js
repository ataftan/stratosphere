 $('.husk').each(function () {
      const $container = $(this);
      const $touched = $container.find('.touched');
      const $burst = $container.find('.burst');

      $touched.on('mouseenter', function () {
        $burst.css('opacity', 1);
      });

      $touched.on('mousemove', function (e) {
        const offsetX = 3;
        const offsetY = 3;
        $burst.css({
          left: e.clientX + offsetX + 'px',
          top: e.clientY + offsetY + 'px'
        });
      });

      $touched.on('mouseleave', function () {
        $burst.css('opacity', 0);
      });
    });

$(".i").on("click", function() {
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



