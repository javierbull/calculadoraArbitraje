"use strict";

$(document).ready(function () {

   // TOOLTIP
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
   })
   // END TOOLTIP

  $("#pills-gastos-arbitrales-tab").click(function () {
    $("#header-gastos-arbitrales").show();
    $("#header-arbitraje-emergencia").hide();
  });

  $("#pills-arbitraje-emergencia-tab").click(function () {
    $("#header-gastos-arbitrales").hide();
    $("#header-arbitraje-emergencia").show();
  });
});

// End Drag & Drop
