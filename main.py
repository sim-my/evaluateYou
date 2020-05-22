
#libraries import
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn import metrics

#dataset read
dataset = pd.read_csv('static/performance.csv')

#X is features and y is result
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:,-1:].values

#Since all the data collected are categorical data
onehotencoder = OneHotEncoder(categories = "auto")
X = onehotencoder.fit_transform(X).toarray()

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#Using CART

# Create Decision Tree classifer object
clf = DecisionTreeClassifier()

# Train Decision Tree Classifer
clf = clf.fit(X_train,y_train)

#Predict the response for test dataset
y_pred = clf.predict(X_test)

#calculate accuracy of the prediction
print("Accuracy:",metrics.accuracy_score(y_test, y_pred))
