
#libraries import
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split

#dataset read
dataset = pd.read_csv('static/performance.csv')

#X is features and y is result
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:,-1:].values

#Since all the data collected are categorical data
onehotencoder = OneHotEncoder(categories = "auto")
X = onehotencoder.fit_transform(X).toarray()