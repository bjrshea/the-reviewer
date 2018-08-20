// BACKEND

function Review(name, location, date, meal) {
  this.name = name;
  this.location = location;
  this.date = date;
  this.meal = meal;
}

function resetFields() {
  $("#name").val("");
  $("#location").val("");
  $("#date").val("");
  $("#meal").val("");
}

// FRONT END

$(document).ready(function(){
  $("form#review").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDate = $("input#date").val();
    var inputtedMeal = $("input#meal").val();

    var newReview = new Review(inputtedName, inputtedLocation, inputtedDate, inputtedMeal);

    $("ul#restaurant-names").append("<li><span class='restaurant-names'>" + newReview.name + "</span></li>");

  $("#restaurant-names").last().click(function() {
    $("#show-restaurant-reviews").show();
    $("#show-restaurant-reviews h2").text(newReview.name);
    $(".location").text(newReview.location);
    $(".date").text(newReview.date);
    $(".meal").text(newReview.meal);
  });

    resetFields();
  });
});
