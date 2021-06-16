$(document).ready(function() {

  $("#submit").submit(function(event) {
    event.preventDefault();
    const favoriteFood = $("#favoriteFood").val();
    const favoriteMusic = $("input:radio[name=favoriteMusic]:checked").val();
    const dob = $("#born").val();
  });
});
