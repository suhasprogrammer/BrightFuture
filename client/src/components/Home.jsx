import React, { useEffect, useState } from "react";
import { deleteTask, getTask, createTask, updateTask } from "./api/taskApi";
import {
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableHead,
  Button,
  TextField,
  Grid,
} from "@mui/material";

const Home = () => {
  const [taskdata, setTaskData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dueDate: "",
    status: false,
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = async () => {
    const taskData = await getTask();
    if (taskData?.data) {
      setTaskData(taskData.data);
    }
  };

  const handleDelete = async (data) => {
    if (data) {
      const res = await deleteTask(data._id);
      if (res?.data.status === true) {
        getTaskData();
      }
    }
  };

  const handleEdit = (task) => {
    setEditMode(true);
    setEditId(task._id);
    setFormData({
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      const res = await updateTask(editId, formData);
      if (res?.data) {
        setEditMode(false);
        setEditId(null);
        getTaskData();
      }
    } else {
      const res = await createTask(formData);
      if (res?.data) {
        getTaskData();
      }
    }
    setFormData({
      name: "",
      description: "",
      dueDate: "",
      status: false,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              name="name"
              label="Task Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              name="dueDate"
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Button type="submit" variant="contained" color="primary">
              {editMode ? "Update Task" : "Add Task"}
            </Button>
          </Grid>
        </Grid>
      </form>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskdata?.map((data) => (
              <TableRow key={data._id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.dueDate}</TableCell>
                <TableCell>{data.status ? "True" : "False"}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(data)}>Edit</Button>
                  <Button onClick={() => handleDelete(data)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
