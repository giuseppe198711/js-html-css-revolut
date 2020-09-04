$(document).ready(function() {

  $(".open-menu").hover(
    function() {
      $(this).children(".menu").toggle();
    }
  );
});
