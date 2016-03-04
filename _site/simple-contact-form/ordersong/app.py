import os

from mandrill import Mandrill
from flask import Flask, request, redirect, abort

app = Flask(__name__)
mandrill_client = Mandrill(os.environ['MANDRILL_API_KEY'])

@app.route('/')
def index():
    return redirect(os.environ['USER_SITE'])


@app.route('/send', methods=['POST'])
def forward():
    message = {
               'to': [{'email': os.environ['USER_EMAIL']}],
               'from_email': 'songcafesender@gmail.com',
               'subject': '{} ordered a song!'.format(request.form.get('lname')),
               'text': 'E-mail address: {}\nName: {} {}\n\nSong Description:\n\n{}'.format(request.form.get('email'), request.form.get('fname'), request.form.get('lname'), request.form.get('message')),
              }
    result = mandrill_client.messages.send(message=message)
    if result[0]['status'] != 'sent':
        abort(500)
    return redirect(os.environ['SUCCESS_PAGE'])


@app.errorhandler(500)
def error(e):
    return ('Sorry, something went wrong! %s - %s' % (e.__class__, e), 500)

