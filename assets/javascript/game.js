var targetNumber;
var varA;
var varB;
var varC;
var varD;
crystals = $("#crystals");
var counter;
var win =0;
var loss =0;

function startup(){
  //Per instructions generating a random number between 19 and 120, when game restarts
  targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      
  //Generating new values for the crystal values each time when game restarts
  varA =  Math.floor(Math.random() * 12) + 1;
  varB =  Math.floor(Math.random() * 12) + 1;
  varC =  Math.floor(Math.random() * 12) + 1;
  varD =  Math.floor(Math.random() * 12) + 1;
  
  counter = 0; //assigning val to 0 on startup/game restart
  
  $("#number-to-guess").text(targetNumber);
  $("#wins").html("Wins: "+ win);
  $("#losses").html("Loss: "+ loss);
//  $("#user_Score").html("Your total score: "+ counter);
  $("#user_Score").html(counter);
// Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
//the values are random numbers defined above
  var numberOptions = [varA, varB, varC, varD];
  console.log(numberOptions);

  var imgSrc = ["http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg",
  "assets/images/jewel_1.jpg",
  "assets/images/jewel_2.jpg",
  "assets/images/jewel_3.jpg"]

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", imgSrc[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  crystals.append(imageCrystal);
  //crystals.html(imageCrystal);
}
};
// This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  //alert("New score: " + counter);
  //$("#user_Score").html("Your total score: "+ counter);
  $("#user_Score").html(counter);

  if (counter === targetNumber) {
    
    win++;
    $("#wins").html("Wins: "+ win);
   // alert("You win!");
    crystals.empty();
    startup();
  }

  else if (counter >= targetNumber) {
    
    loss++
    $("#losses").html("Loss: "+ loss);
    //alert("You lose!!");
    crystals.empty();
    startup();
  }

});

