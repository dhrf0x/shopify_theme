document.addEventListener("DOMContentLoaded", function () {

  if (typeof Fancybox === "undefined") {
    alert("Fancybox NO cargó");
    return;
  }

  alert("Fancybox SÍ cargó");

  Fancybox.bind("[data-fancybox='product-gallery']", {
    Images: {
      zoom: true,
    },
  });

});