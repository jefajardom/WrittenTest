from flask import Flask, jsonify, request 
from flask_mysqldb import MySQL 
from flask_cors import CORS

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '125jGdqui.'
app.config['MYSQL_DB'] = 'db_WrittenTest'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
CORS(app)

@app.route('/api/Machine', methods=['GET'])
def get_all_machines():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM db_WrittenTest.tasks")
    rv = cur.fetchall()
    return jsonify(rv)
	
@app.route('/api/Job/<id>', methods=['GET'])
def get_all_job():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM db_WrittenTest.job where id = "+id)
    rv = cur.fetchall()
    return jsonify(rv)

@app.route("/api/job/<id>", methods=['PUT'])
def update_job(id):
    cur = mysql.connection.cursor()
	#TASK A 
    name = request.get_json()['name']
    task1_id= request.get_json()['id']
    task1_name = request.get_json()['Sequence']
    task1_machine= request.get_json()['Machine']
    
    cur.execute("UPDATE db_WrittenTest.Job SET name = '" + str(title) + "' where id = " + id)
    mysql.connection.commit()	

    result = {"name": name}

    return jsonify({"result": result})
	
if __name__== '__main__':
	app.run(debug=True)