// BACKEND

function Review(name) {
  this.name = name;
}



// FRONT END

$(document).ready(function(){
  $("form#review").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    console.log(inputtedName);
    var newReview = new Review(inputtedName);

    $("ul#restaurant-names").append("<li><span class='restaurant-name'>" + newReview.name + "</span></li>");
  });
});
