from flask import Flask, render_template, send_file, request, redirect, send_from_directory
import data
import os



app = Flask(__name__)

app.config["FILE_UPLOADS"] = "/Users/pradi/nps2021/uploads"


@app.route('/')
def home():
   return render_template('home.html')

@app.route('/search', methods=["GET", "POST"])
def search():
   if request.method == "POST":
        query = request.form['query']
        topScores = data.matchQuery(query)
        fileNames = {}
        for fileID in topScores:
           filename = data.filenameFromID(fileID+1)
           fileNames[filename] = topScores[fileID]
        return render_template('search.html', data=fileNames)
   return render_template('search.html')

@app.route('/search/<path:filename>', methods=["GET", "POST"])
def download_file(filename):
   #fileID = data.getFileID(filename)
   #full_path = data.downloadFile(fileID)
   return send_from_directory("/Users/pradi/Documents/nps2021-uploads", filename, as_attachment=True)
   

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


@app.route('/collection')
def collection():
   fileNames = data.getAllFileNames()
   return render_template('collection.html', data=fileNames)


