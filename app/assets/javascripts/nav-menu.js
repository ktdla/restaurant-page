$(document).ready(function () {
  // menu from carta
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

  // mobile menu
  var menu = $('#navigation-menu');
  var menuToggle = $('#mobile-menu');

  $(menuToggle).unbind('click').click(function (e) {
    menu.slideToggle(function () {
      if (menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // responsive menu from carta
  $(".aside-menu.fa-caret-right").click(function () {
    $(".category").addClass("active");
    $(".fa-caret-left").addClass("active");
  });
  $(".aside-menu.fa-caret-left").click(function () {
    $(".category").removeClass("active");
    $(".fa-caret-left").removeClass("active");
  });
  $(".category li").click(function () {
    $(".category").removeClass("active");
    $(".fa-caret-left").removeClass("active");
  });
});