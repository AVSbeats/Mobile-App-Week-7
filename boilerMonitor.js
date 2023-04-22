/*
    Name: Abraham Vallejos-Soto
    Date: 4/22/2023
    Assignment: Week Lab 7
*/

// ---------- Login Information Script ----------

$(document).ready(function() {

    // Add event listener to Log In button
    $("#login").click(function(event) {

      event.preventDefault(); // Prevent form submission
  
      // Get input values
      var username = $("#username").val();
      var password = $("#password").val();
  
      // Username and Password information
      if (username === "avs" && password === "123") {

        // Log user in and redirect to basic information page
        $.mobile.changePage("#pageBasicInfo");

      } else {
        // Display error message
        alert("Invalid username or password. Please try again.");
      }
    });
});
  
// ---------- Basic Boiler Information Script ----------
$(document).ready(function() {
  // When the form is submitted
  $('#basicForm').submit(function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values of the form inputs
    var boilerId = $('#boilerId').val();
    var dateOfPur = $('#dateOfPur').val();
    var maxPres = $('#maxPres').val();
    var maxTemp = $('#maxTemp').val();
    var changePass = $('#changePass').val();
    
    // Store the values in localStorage
    localStorage.setItem('boilerId', boilerId);
    localStorage.setItem('dateOfPur', dateOfPur);
    localStorage.setItem('maxPres', maxPres);
    localStorage.setItem('maxTemp', maxTemp);
    localStorage.setItem('changePass', changePass);
    
    // Alert the user that the data has been saved
    alert('Data saved to localStorage');
  });
});

// ---------- Temperature & Pressure Information Script ----------
$(document).ready(function() {

  $('#tempPressForm').submit(function(event) {

    event.preventDefault();

    // get the values of the tempPressForm inputs
    var presData = $('#presData').val();
    var tempData = $('#tempData').val();

    // Store the values in localStorage
    localStorage.setItem('presData', presData);
    localStorage.setItem('tempData', tempData);

    // Alert the user that the data has been saved
    alert('Data saved to localStorage');
  });
});

// ---------- Graph Information Script ----------