
$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAckR4P90FZz8DLs-cnBdD4bfb20VqYreU",
    authDomain: "rps-multiplayer-86b3e.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-86b3e.firebaseio.com",
    projectId: "rps-multiplayer-86b3e",
    storageBucket: "rps-multiplayer-86b3e.appspot.com",
    messagingSenderId: "3903114990"
  };

  firebase.initializeApp(config);

   // var dataRef = firebase.database();

    // Capture Button Click
    $("#rock-btn").on("click", function(event) {
      event.preventDefault();
      var choice = $(this).attr('data-choice')
      console.log(choice);

    }); 
    
    $("#paper-btn").on("click", function(event) {
      event.preventDefault();
      //console.log('hit paper button');
      var choice = $(this).attr('data-choice')
      console.log(choice);

    }); 

    $("#scissor-btn").on("click", function(event) {
      var choice = $(this).attr('data-choice')
      console.log(choice);

    }); 

    // ADD USERS X2

    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // YOUR TASK!!!

      // Code in the logic for storing and retrieving the most recent user.

      // Dont forget to provide initial data to your Firebase database.

      name = $("#name-input").val().trim();

      email = $("#email-input").val().trim();

      age = $("#age-input").val().trim();

      comment = $("#comment-input").val().trim();

      // Code for the push

      dataRef.ref().push({

        name: name,

        email: email,

        age: age,

        comment: comment,

        dateAdded: firebase.database.ServerValue.TIMESTAMP

      });

    });

    // Firebase watcher + initial loader HINT: .on("value")


// BREAKOUT CODE FROM 7.3 - ADD CHILD
    // dataRef.ref().on("child_added", function(snapshot) {

    //   // Log everything that's coming out of snapshot

    //   console.log(snapshot.val());

    //   console.log(snapshot.val().name);

    //   console.log(snapshot.val().email);

    //   console.log(snapshot.val().age);

    //   console.log(snapshot.val().comment);

    //   // Change the HTML to reflect

    //   $("#name-display").html(snapshot.val().name);

    //   $("#email-display").html(snapshot.val().email);

    //   $("#age-display").html(snapshot.val().age);

    //   $("#comment-display").html(snapshot.val().comment);

    // // Handle the errors

    // }, function(errorObject) {

    //   console.log("Errors handled: " + errorObject.code);

    // });
    
}); 
