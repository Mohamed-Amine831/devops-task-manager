<<<<<<< HEAD
const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: "Initial task", completed: true },
  { id: 2, title: "Install Git and Node.js", completed: true },
  { id: 3, title: "Learn DevOps basics", completed: false }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST a new task
router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
=======
const express = require('express'); 
const router = express.Router(); 
const tasks = [ 
    { id: 1, title: "Learn Git", completed: false }, 
    { id: 2, title: "Practice DevOps", completed: true } 
]; 

router.get('/', (req, res) => { 
    res.json(tasks); 
}); 

module.exports = router; 
>>>>>>> main
