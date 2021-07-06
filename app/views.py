from flask import Flask, render_template, request, redirect
import data
import os

app = Flask(__name__)

app.config["FILE_UPLOADS"] = "/Users/pradi/nps2021/app/static/uploads"


@app.route('/')
def home():
   return render_template('home.html')

@app.route('/search')
def search():
   return render_template('search.html')

@app.route('/upload_files', methods=["GET", "POST"])
def upload_files():
   if request.method == "POST":
     if request.files:
       new_file = request.files["new_file"]  
       new_file.save(os.path.join(app.config["FILE_UPLOADS"]), new_file.filename)
       data.loadInFile(os.path.join(app.config["FILE_UPLOADS"]), new_file.filename)

       return redirect(request.url)
   return render_template('upload_files.html')

if __name__ == '__main__':
   app.run('0.0.0.0', port=5001)
   app.debug = True




