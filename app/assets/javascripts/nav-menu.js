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

  //carta from specialities
  var url = window.location.href
  var category = url.slice(url.indexOf("#")+1);
  if (url.indexOf("#") > -1) {
    $("section .menu").removeClass("show");
    $(".category li").removeClass("active");
    $("li div").removeClass("arrow")
    var element = $('li[data-name="' + category + '"]')
    $(element).addClass("active");
    $(element).find("div").addClass("arrow");
    $('#' + category).addClass("show");
  }

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
  $(".aside-menu").unbind("click").click(function () {
    $(this).toggleClass("active");
  });
  $(".category li").click(function () {
    $(".aside-menu").removeClass("active");
  });
});