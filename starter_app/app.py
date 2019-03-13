#Cathy Cai
#SoftDev1 pd6
#K --
#2018-

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')

def home():
    return '''<h3>home</h3>'''

@app.route('/new-tab')

def nothome():
    return render_template('/index.html')


if __name__ == '__main__':
    app.debug = True
    app.run()
