$(document).mousemove(function (e) {
  $("#cursor").css({
    left: e.pageX + "px",
    top: e.pageY + "px"
  });
  $("#cursorFollow").css({
    left: e.pageX + "px",
    top: e.pageY + "px"
  });

  $('a').mouseover(function () {
    $('#mouse-cursor').addClass('on-link');
  })
  $('a').mouseout(function () {
    $('#mouse-cursor').removeClass('on-link');
  })
});
