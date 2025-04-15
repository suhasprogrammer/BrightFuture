import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import TaskWrapper from "./components/context/TaskWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <TaskWrapper>
    <StrictMode>
      <App />
    </StrictMode>
  </TaskWrapper>
);
