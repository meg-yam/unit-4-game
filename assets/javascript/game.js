var targetNumber = 55;
$("#randomNum").text(targetNumber);

var counter = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var increment = numberOptions[Math.round(Math.random())];

// for (var i = 0; i < numberOptions.length; i++) {
//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");
//     imageCrystal.attr("src", "../images/Blue.jpeg");
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//     $("#crystals").append(imageCrystal);
// }


$(".image").on("click", function() {
   
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalVaue = parseInt(crystalValue);
   
    counter += crystalValue;

    $("#score").text(counter);

    if (counter === targetNumber) {
        $("#alarm").text("You win!");
    } 
    else if (counter >= targetNumber) {
        $("#alarm").text("You lose!");
    }
});