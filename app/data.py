import cv2
import numpy as np
import pytesseract
from pytesseract import Output
import nltk
from nltk import word_tokenize
nltk.download('punkt')
from nltk import ngrams, FreqDist
import pandas as pd
import matplotlib.pyplot as plt
nltk.download('stopwords') 
from nltk.corpus import stopwords
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from pdf2image import convert_from_path
from IPython.display import Image
from pptx import Presentation
import glob
import docx
import os
from sklearn.metrics.pairwise import cosine_similarity
import cx_Oracle


def get_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

def getImageText(filename):
    img = cv2.imread(filename)
    grayscale = get_grayscale(img)
    custom_config = r'-l eng --psm 6'
    text = pytesseract.image_to_string(grayscale, config=custom_config)
    return text

def getPDFText(filename):
    pages = convert_from_path(filename, 500)
    pagenumber = 1
    page_paths = []
    for page in pages:
        filename = "page"+ str(pagenumber) + ".jpg"
        pagenumber += 1
        page_paths.append(filename)
        page.save(filename, 'JPEG')
    images = []
    for page in page_paths:
        images.append(cv2.imread(page))
    for image in images:
        image = get_grayscale(image)
    custom_config = r'-l eng --psm 6'
    text = ""
    for grayscale in images:
        text += pytesseract.image_to_string(grayscale, config=custom_config)
    return text

def getPPTXText(filename):
    for eachfile in glob.glob(filename):
        prs = Presentation(eachfile)
        fullText = []
        for slide in prs.slides:
            for shape in slide.shapes:
                if hasattr(shape, "text"):
                    fullText.append(shape.text)
    return '\n'.join(fullText)

def getDOCXText(filename):
    doc = docx.Document(filename)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    return '\n'.join(fullText)

def detectFileType(filename):
    extension = filename[filename.rfind(".")+1:]
    return extension

def getFileName(filepath):
    identifier = "\\"
    filename = filepath[filepath.rfind(identifier)+1:]
    return filename

def preprocessing(text):
    words = word_tokenize(text)
    updated_text = [word.lower() for word in words]
    final_text = [x for x in updated_text if x.isalpha()]
    stop_words = stopwords.words('english')
    final_text = [word for word in final_text if word not in stop_words]
    lemmatizer = WordNetLemmatizer()
    for word in final_text:
        word = lemmatizer.lemmatize(word)
    final_string = " ".join(final_text)
    return final_string

def createFramework(connection):
    try:
        con = cx_Oracle.connect(connection)
        cursor = con.cursor()
        cursor.execute("CREATE TABLE FILENAMES (fileID int NOT NULL PRIMARY KEY, filepath varchar(255), filename varchar(255))")

        print("File Name Table created successfully.")
        
        cursor.execute("CREATE TABLE TEXT (fileID int, text LONG, FOREIGN KEY (fileID) REFERENCES FILENAMES(fileID))")
        
        print("Text Table created successfully.")
        
        cursor.execute("CREATE TABLE FILES (fileID int, filedata BLOB, FOREIGN KEY (fileID) REFERENCES FILENAMES(fileID))")
        
        print("Files Table created successfully.")
        
    except cx_Oracle.DatabaseError as e:
        print("There was a problem with Oracle", e)


    finally: 
        if cursor:
            cursor.close()
        if con:
            con.close() 

def deleteFramework(connection):
    try:
        con = cx_Oracle.connect(connection)
        cursor = con.cursor()
        
        cursor.execute("DROP TABLE TEXT")
        
        print("Text Table dropped successfully.")
        
        cursor.execute("DROP TABLE FILES")
        
        print("Files Table dropped successfully")
        
        cursor.execute("DROP TABLE FILENAMES")

        print("File Name Table dropped successfully.")

    except cx_Oracle.DatabaseError as e:
        print("There was a problem with Oracle", e)


    finally: 
        if cursor:
            cursor.close()
        if con:
            con.close() 








