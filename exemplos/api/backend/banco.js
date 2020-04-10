const banco = require('sqlite-sync');


banco.connect('tarefas.db');

banco.run('CREATE TABLE tarefas(
  id  INTEGER NOT NULL AUTOINCREMENT PRIMARY KEY,
  tarefa TEXT NOT NULL,
  prioridade 
);');
