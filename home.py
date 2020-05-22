from flask import Flask, render_template, request
import pandas as pd
import id3
app = Flask(__name__)


@app.route("/")
def hello():
    return render_template('home.html')

@app.route("/result", methods=['POST'])
def result():
    form_data=request.form
    form_data=form_data.to_dict()
    for keys in form_data: 
        form_data[keys] = int(form_data[keys])
    print(form_data)
    final_result = str(id3.predict(form_data,id3.tree))
    if (final_result == "1.0"):
        final_result = "Below 50%"
    elif (final_result == "2.0"):
        final_result =="50-60%"
    elif (final_result == "3.0"):
        final_result ="60-70%"
    elif (final_result == "4.0"):
        final_result ="70-80%"
    elif (final_result == "5.0"):
        final_result ="80-90%"
    elif (final_result == "6.0"):
        final_result = "Above 90%"
    print("The marks is " + final_result)
    return render_template('result.html',final_result=final_result)