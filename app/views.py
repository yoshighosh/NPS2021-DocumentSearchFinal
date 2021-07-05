from flask import Flask, render_template, request, redirect
app = Flask(__name__)
app.debug = False

@app.route('/')
def home():
   return render_template('home.html')

@app.route('/search')
def search():
   return render_template('search.html')

if __name__ == '__main__':
   app.run()

@app.route('/upload_files', methods=["GET", "POST"])
def upload_files():
   if request.method == "POST":
     if request.files:
       new_file = request.files["new_file"]  
       return redirect(request.url)
   return render_template('upload_files.html')
