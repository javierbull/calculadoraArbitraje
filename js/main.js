"use strict";

$(document).ready(function () {

   // TOOLTIP
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
   })
   // END TOOLTIP

  $("#show-resumen").click(function () {
    $("#content-sorteo").hide();
    $("#content-resumen").show();
  });
});

// End Drag & Drop
