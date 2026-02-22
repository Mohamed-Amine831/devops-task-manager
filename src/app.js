const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks'); 

let tasks = [
  { id: 1, title: "Initial task", completed: true },
  { id: 2, title: "Install Git and Node.js", "completed": true },
  { id: 2, title: "Learn DevOps basics", completed: false }
  
];

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.json({ message: "Welcome from MAIN branch" });
=======
  res.json({ message: "DevOps Task Manager API is running..." });
>>>>>>> feature/routes-refactor
});

app.use('/tasks', tasksRouter);

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length+1, title: req.body.title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, ()=> console.log("API running on port 3000"));

const tasksRouter = require('./routes/tasks'); 
app.use('/tasks', tasksRouter);