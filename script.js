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





function wrapWordsInNode(node) {
  for (let i = node.childNodes.length - 1; i >= 0; i--) {
    const child = node.childNodes[i];

    if (child.nodeType === Node.TEXT_NODE) {
      // Split text node into words and spaces
      const words = child.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();

      words.forEach(word => {
        if (/\s+/.test(word)) {
          // whitespace as is
          frag.appendChild(document.createTextNode(word));
        } else if (word.length > 0) {
          // wrap word in span.word
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = word;
          frag.appendChild(span);
        }
      });

      child.replaceWith(frag);

    } else if (child.nodeType === Node.ELEMENT_NODE) {
      // recurse into spans or other elements
      wrapWordsInNode(child);
    }
  }
}

// Run this after DOM is loaded:
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rosary.husk.spiraltime p').forEach(p => {
    wrapWordsInNode(p);
  });
});
  