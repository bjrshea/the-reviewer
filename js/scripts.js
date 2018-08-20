// BACKEND

function Review(name) {
  this.name = name;
}

function resetFields() {
  $("#name").val("");
}

// FRONT END

$(document).ready(function(){
  $("form#review").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    console.log(inputtedName);
    var newReview = new Review(inputtedName);

    $("ul#restaurant-names").append("<li><span class='restaurant-names'>" + newReview.name + "</span></li>");

  $("#restaurant-names").last().click(function() {
    $("#show-restaurant-reviews").show();
    $("#show-restaurant-reviews h2").text(newReview.name);
  });

    resetFields();
  });
});
