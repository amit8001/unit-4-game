//Declaring global variables
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
  //Per instructions generating a random number between 19 and 120, each time when game restarts
  targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      
  //Generating new random values for each of the 4 crystal, each time when game restarts
  //Those values to be in between 1 and 12
  varA =  Math.floor(Math.random() * 12) + 1;
  varB =  Math.floor(Math.random() * 12) + 1;
  varC =  Math.floor(Math.random() * 12) + 1;
  varD =  Math.floor(Math.random() * 12) + 1;
  
  counter = 0; //assigning val to 0 on startup/game restart
  
  //Displaying the values to the screen
  $("#number-to-guess").text(targetNumber);
  $("#wins").html("Wins: "+ win);
  $("#losses").html("Loss: "+ loss);
  $("#user_Score").html(counter);


//Defining an array below to store those 4 random crystal values
  var numberOptions = [varA, varB, varC, varD];
  console.log(numberOptions);

//Defining an images array to store the 4 images for each of the crsytals
  var imgSrc = ["assets/images/jewel_1.jpg",
  "assets/images/jewel_2.jpg",
  "assets/images/jewel_3.jpg","assets/images/jewel_4.jpg"]

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image". This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image from the images array, based on the current index 
  imageCrystal.attr("src", imgSrc[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the item value at the current index in the numberOptions array.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  crystals.append(imageCrystal);
 }
};

// This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  var crystalValue = ($(this).attr("data-crystalvalue"));
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  crystalValue = parseInt(crystalValue);
  
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  //Display that updated score to the user score element.
  $("#user_Score").html(counter);

  //Below 'if' code checks if the counter value is equal to the random number selected by computer
  //if yes, then increment the wins value by 1, updated win value displayed and the game restarts 
  //else if the counter value is greater than the random number selected by computer
  // then loss value goes up by 1, updated loss value displayed and the game restarts as well.
  if (counter === targetNumber) {
    
    win++;
    $("#wins").html("Wins: "+ win);
   // alert("You win!");
    crystals.empty();
    startup();
  }

  else if (counter > targetNumber) {
    
    loss++
    $("#losses").html("Loss: "+ loss);
    //alert("You lose!!");
    crystals.empty();
    startup();
  }

});

