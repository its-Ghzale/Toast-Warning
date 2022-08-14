$(document).ready(function () {
  $(".toast-close").click(function () {
    var parent = $(this).parent(".toast");
    parent.fadeOut("slow", function () {
      $(this).remove();
    });
  });
});
