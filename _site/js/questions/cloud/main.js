
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("thesongbarista", "sA276362!");
 
  var name = request.params.name;
  var email = request.params.email;
  var message = request.params.message;
 
  sendgrid.sendEmail({
   to: "thesongbarista@gmail.com",
   from: email,
   fromname: name,
   subject: "Question about The Song Cafe",
   text: "Name: "+name+"\nEmail: "+email+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
