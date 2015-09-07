---
layout: workpage
title: FAQs
permalink: /how/faq/
active: how
description: Web Development portfolio of Kanishk Kunal. WordPress themes, Jekyll themes, Blogs and WebApps
---

Here you can find some commonly asked questions about The Song Cafe. If you have any specific questions, feel free to contact me using the form provided at the bottom of the page.

<script>
function validateName() {

  var name = document.getElementById('name').value;

  if (name.length == 0) {

    document.getElementById("name-error").style.visibility = "visible";
    producePrompt('Name is required', 'name-error' , 'red');
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    document.getElementById("name-error").style.visibility = "visible";
    producePrompt('Include your first and last name','name-error', 'red');
    return false;

  }

  if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  	document.getElementById("name-error").style.visibility = "hidden";
  }

    return true;

}

function validateEmail () {

  var email = document.getElementById('email').value;

  if (email.length == 0) {

    document.getElementById("email-error").style.visibility = "visible";
    producePrompt('E-mail is required','email-error', 'red');
    return false;

  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    document.getElementById("email-error").style.visibility = "visible";
    producePrompt('Invalid e-mail address', 'email-error', 'red');
    return false;

  }

  if (email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  	document.getElementById("email-error").style.visibility = "hidden";
  }

    return true;
}

function validateMessage() {
  var message = document.getElementById('message').value;
  var required = 1;
  var left = required - message.length;

  if (left > 0) {

  	document.getElementById("message-error").style.visibility = "visible";
    producePrompt('Don\'t forget to ask your question!','message-error','red');
    return false;
  }

  if (left <= 0) {
  	
  	document.getElementById("message-error").style.visibility = "hidden";
  }

  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit your question.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 3000);
    return false;
  }
  else {
  	loading();
  }
}

function loading() {
  var image = document.getElementById('loadingSpinner');
  image.style.display = 'inline';
  var text = document.getElementById('loadingText');
  text.style.display = 'inline';
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
</script>

<form name="questionform" action="https://questionform.herokuapp.com/send" onsubmit="return validateForm()" method="POST">

  <header>
    <h2>Don't see your question? Ask it here!</h2>
    <div>If you have any other questions or concerns, use this form to contact me directly.</div>
  </header>

  <hr>
  
  <div>
    <label class="desc" id="title1" for="name">Full Name</label>
    <div>
      <input id="name" name="name" type="text" class="field text fn" value="" size="8" tabindex="1" onchange='validateName()'>
      <span class='error-message' id='name-error'></span>
    </div>
  </div>
    
  <div>
    <label class="desc" id="title3" for="email">
      Email
    </label>
    <div>
      <input id="email" name="email" type="text" spellcheck="false" value="" maxlength="255" tabindex="3" onchange='validateEmail()'>
      <span class='error-message' id='email-error'></span>
   </div>
  </div>
    
  <div>
    <label class="desc" id="title4" for="message">
      Question
    </label>
  
    <div>
      <textarea id="message" name="message" spellcheck="true" rows="10" cols="50" tabindex="4" onchange='validateMessage()'></textarea>
      <span class='error-message' id='message-error'></span>
    </div>
  </div>

  <div>
		<div>
			<div>
				<input id="saveForm" name="saveForm" type="submit" value="Send Question" tabindex="5">
				<p name="loadingText" id="loadingText" style="display:none;">Sending...</p> 
				<img src="http://apps.voxmedia.com/graphics/sbnation-nba-draft-meme/images/loader-427f86c0.gif" name="loadingSpinner" id="loadingSpinner" height="5%" width="5%" style="display:none;">
				<span class='error-message' id='submit-error'></span>
    </div>
    </div>
	</div>
  
</form>

<script type="text/javascript">

	$(document).ready(function() {
		$.get("https://questionform.herokuapp.com/");
	});

</script>