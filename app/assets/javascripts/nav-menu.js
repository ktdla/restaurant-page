$(document).ready(function () {
  $('.category li').click(function () {
    var name = this.dataset.name;
    for (var i = 0; i < $("section .menu").length; i++) {
      $("section .menu").removeClass("show");
      $(".category li").removeClass("active");
      $("li div").removeClass("arrow");
    }
    $(this).addClass("active");
    $(this).find("div").addClass("arrow");
    $('#' + name).addClass("show");
  });
});