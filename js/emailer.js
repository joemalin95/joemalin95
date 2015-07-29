$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("Wri8lIj0ZoCzgQOGmXdwFywvgKCZNR18wdoKI4F5", "s8EwVh0fyLA6NOaiaZsNzg68kv69TVrk1Ng3K2Ow");

  // Setup the form to watch for the submit event
  $('#myForm').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      name: document.getElementById('name').value, 
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});