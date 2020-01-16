// Search box show
$(document).ready(function () {
  $(".navbar button").click(function () {
    $(".navbar form input").toggle(999);
  });
});


// bigSlider
$('#gallery').bigSlider();


$("#gallery").bigSlider({
  animationDuration: 200
})
