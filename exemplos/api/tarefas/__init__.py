from flask import Flask
from flask.ext.sqlalchemy import SQLalchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/tarefas.db'

from api.tarefas.views import tarefa
app.resgister_
