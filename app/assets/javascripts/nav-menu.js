$(document).ready(function () {
  $('.category li').click(function () {
    var name = this.dataset.name;
    for (var i = 0; i < $("section .menu").length; i++) {
      $("section .menu").removeClass("show");
      $(".category li").removeClass("active");
    }
    $(this).addClass("active");
    $('#' + name).addClass("show");
  });
});