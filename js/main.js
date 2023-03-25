"use strict";

$(document).ready(function () {

  // TOOLTIP
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // END TOOLTIP


  $("#pills-gastos-arbitrales-tab").click(function () {
    $("#header-arbitraje-emergencia").hide();
    $("#section-resultados-arbitraje-emergencia").hide();
     $("#header-gastos-arbitrales").fadeIn("slow");
  });

  $("#pills-arbitraje-emergencia-tab").click(function () {
    $("#header-gastos-arbitrales").hide();
    $("#section-resultados-gastos-arbitrales").hide();
     $("#header-arbitraje-emergencia").fadeIn("slow");
  });

  $("#btn-calcular-gastos-arbitrales").click(function () {
    $("#section-resultados-gastos-arbitrales").show();
    $("#section-resultados-arbitraje-emergencia").hide();
  });

  $("#btn-calcular-arbitraje-emergencia").click(function () {
    $("#section-resultados-gastos-arbitrales").hide();
    $("#section-resultados-arbitraje-emergencia").show();
  });


});


