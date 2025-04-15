const taskSchema = require("../model/taskModel");

const getTaskController = async (req, res) => {
  try {
    const taskData = await taskSchema.find();
    res.send({
      status: true,
      message: "Data Fetch Successfully",
      data: taskData,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    });
  }
};
const updateTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const taskExist = await taskSchema.findById(id);
    if (!taskExist) {
      return res.send({
        status: false,
        message: "Task Not Exist",
      });
    }

    const updatedTask = await taskSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.send({
      status: true,
      message: "Task Updated Successfully",
      data: updatedTask,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    });
  }
};

const addTaskController = async (req, res) => {
  try {
    console.log("checking req body", req.body);

    const taskData = await taskSchema(req?.body);
    await taskData.save();
    return res.send({
      status: true,
      message: "Task Added Successfully!!",
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    });
  }
};
const deleteTaskController = async (req, res) => {
  console.log("checking body req for delete", req?.body);

  try {
    const { _id } = req?.body;

    const taskExist = await taskSchema.findById({ _id: _id });
    if (!taskExist) {
      return res.send({
        status: false,
        message: "Task Not Exist",
      });
    }

    const taskDeleted = await taskSchema.findByIdAndDelete(_id);
    return res.send({
      status: true,
      message: "Task Deleted Successfully",
      data: taskDeleted,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  addTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
};
