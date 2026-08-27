document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 768) return;

  if (typeof Fancybox === 'undefined') return;

  Fancybox.bind('[data-fancybox="product-gallery"]', {
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
    Images: {
      zoom: true,
      Panzoom: {
        maxScale: 5,
      },
    },
    animated: true,
    dragToClose: true,
    wheel: false,
    autoFocus: false,
  });
});