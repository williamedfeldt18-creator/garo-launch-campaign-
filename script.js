(function () {
  'use strict';

  // Smooth scroll is handled by CSS (scroll-behavior: smooth).
  // Make section targets focusable for accessibility when navigating via hash.
  ['choose'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute('tabindex', '-1');
  });

  // BESS scalability slider: 1–6 packs → kWh usable (4.86, 9.72, 14.59, 19.45, 24.32, 29.18)
  var slider = document.getElementById('bess-slider');
  if (slider) {
    var kWhByPack = [0, 4.86, 9.72, 14.59, 19.45, 24.32, 29.18];
    var outputPacks = document.getElementById('bess-packs');
    var outputPlural = document.getElementById('bess-packs-plural');
    var outputKwh = document.getElementById('bess-kwh');

    function updateBessSlider() {
      var packs = parseInt(slider.value, 10);
      var kwh = kWhByPack[packs];
      if (outputPacks) outputPacks.textContent = packs;
      if (outputPlural) outputPlural.textContent = packs === 1 ? '' : 's';
      if (outputKwh) outputKwh.textContent = kwh.toFixed(2);
    }

    slider.addEventListener('input', updateBessSlider);
    slider.addEventListener('change', updateBessSlider);
    updateBessSlider();
  }
})();
