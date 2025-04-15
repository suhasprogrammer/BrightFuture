import React, { useState } from "react";

const taskContext = React.createContext();

const TaskWrapper = ({ children }) => {
  const [taskData, setTaskData] = useState(null);

  const handlTaskData = (data) => {
    setTaskData(data);
  };
  return (
    <taskContext.Provider value={{ taskData, handlTaskData }}>
      {children}
    </taskContext.Provider>
  );
};

export default TaskWrapper;
