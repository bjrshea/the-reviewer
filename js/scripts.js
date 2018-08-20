// BACKEND

function Review(name, location, date, meal, rating, comment) {
  this.name = name;
  this.location = location;
  this.date = date;
  this.meal = meal;
  this.rating = rating;
  this.comment = comment;
}

function resetFields() {
  $("#name").val("");
  $("#location").val("");
  $("#date").val("");
  $("#meal").val("");
  $("#rating").val("");
  $("#comment").val("");
}

// FRONT END

$(document).ready(function(){
  $("form#review").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDate = $("input#date").val();
    var inputtedMeal = $("select#meal").val();
    console.log(inputtedMeal);
    var inputtedComment = $("textarea#comment").val();
    var inputtedRating = $("input#rating").val();

    var newReview = new Review(inputtedName, inputtedLocation, inputtedDate, inputtedMeal, inputtedRating, inputtedComment);

    $("ul#restaurant-names").append("<li><span class='restaurant-name'>" + newReview.name + "</span></li>");

  $(".restaurant-name").last().click(function() {
    $("#show-restaurant-reviews").show();
    $("#show-restaurant-reviews h2").text(newReview.name);
    $(".location").text(newReview.location);
    $(".date").text(newReview.date);
    $(".meal").text(newReview.meal);
    $(".rating").text(newReview.rating);
    $(".comment").text(newReview.comment);
  });

    resetFields();

  });
});
