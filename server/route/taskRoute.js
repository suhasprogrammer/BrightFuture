const route = require("express").Router();
const {
  addTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
} = require("../controller/taskController");

route.post("/addTask", addTaskController);
route.get("/getTask", getTaskController);
route.put("/updateTask/:id", updateTaskController);
route.delete("/deletetask", deleteTaskController);

module.exports = route;
