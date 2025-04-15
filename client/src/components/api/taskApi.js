import api from "./axiosInstance";

export const getTask = async () => {
  const result = await api.get("/getTask");
  return result?.data;
};

export const deleteTask = async (id) => {
  console.log("checking _id", id);
  const data = {
    _id: id,
  };

  const result = await api.delete("/deletetask", { data });
  return result?.data;
};

export const createTask = async (task) => {
  const result = await api.post("/addTask", task);
  return result?.data;
};

// Update an existing task
export const updateTask = async (id, task) => {
  const result = await api.put(`/updateTask/${id}`, task);
  return result?.data;
};
