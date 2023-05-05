import todoList from "../model/index.js";
import respond from "../utils/feedbackHandler.js";

const createTask = (req, res) => {
  let name = req.body.name;
  if (!name) return respond("Name is Required", 400, res);
  const isFound = todoList.find((i) => i.name === name);
  if (isFound) return respond("Task Already Exist", 400, res);
  const newTask = {
    id: todoList.length + 1,
    name: name,
  };
  todoList.push(newTask);
  respond("You have successfully created task", 200, res, newTask);
};

const getTasks = (req, res) => {
 respond('List of Task', 200, res, todoList);
};

const getTask = (req, res) => {
  let id = req.params.id;
  const task = todoList.find((i) => i.id === parseInt(id));
  if (!task) return respond('Task Not Found', 404, res)
  respond('Task ', 200, res, task);
 
};

const updateTask = (req, res) => {
  let id = req.params.id;
  const task = todoList.find((i) => i.id === parseInt(id));
  if (!task) return respond('Task Not Found', 404, res)
  let newName = req.body.name;
  if (!newName) return respond('Name is Required', 400, res)
  task.name = newName;
  respond('You have successfully Updated task', 200, res, task)
};

const deleteTask = (req, res) => {
  let id = req.params.id;
  const task = todoList.find((i) => i.id === parseInt(id));
  if (!task) return respond('Task Not Found', 404, res)
  let indexToSplice = todoList.indexOf(task);
  todoList.splice(indexToSplice, 1);
  respond('You have successfully Deleted Data', 200, res, todoList);
};

const deleteAllTasks = (req,res)=>{
    let length = todoList.length;
    todoList.splice(0, length);
    respond('You have successfully Deleted all tasks', 200, res, todoList);
}



export { createTask, getTasks, getTask, updateTask, deleteTask, deleteAllTasks };
