import os
 +import logging
  
  from mandrill import Mandrill
  from flask import Flask, request, redirect, abort
 @@ -7,7 +8,7 @@
Mandrill_API_key = QHfwRC_KpEQJHHGTeDHMWQ
  mandrill_client = Mandrill(Mandrill_API_key)
  
  
 -@app.route('/send')
 +@app.route('/')
  def index():
      return redirect(http://www.thesongcafe.com)
  
 @@ -16,9 +17,9 @@ def index():
  def forward():
      message = {
                 'to': [{'email': 'thesongbarista@gmail.com'}],
 +               'from_email': request.form.get('email'),
 +               'subject': 'Message from {}, Subject:{}'.format(request.form.get('name'), request.form.get('subject')),
 +               'text': request.form.get('message'),
                }
      result = mandrill_client.messages.send(message=message)
      if result[0]['status'] != 'sent':
