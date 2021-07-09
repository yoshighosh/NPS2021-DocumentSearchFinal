from flask import Flask, render_template, request, redirect
import data
import os

app = Flask(__name__)

app.config["FILE_UPLOADS"] = "/Users/pradi/nps2021/uploads"


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
       new_file.save("/Users/pradi/documents/nps2021-uploads/" + new_file.filename)
       data.loadInFile("/Users/pradi/documents/nps2021-uploads/" + new_file.filename)
       
       return render_template('upload_files_success.html')

   return render_template('upload_files.html')

if __name__ == '__main__':
   app.run()
   app.debug = True




