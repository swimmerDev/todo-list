import React from "react";
import "./styles/App.css";
import AddLine from "./component/AddLine";
import { TasksContextProvider } from "./context/TaskContext";
import TaskList from "./component/TaskList";

function App() {
  return (
    <TasksContextProvider>
      <div className="App">
        <h1 className="MainTitle">Task Manager</h1>
        <div className="taskBG">
          <h1 className="TasksTitle">Work</h1>
          <AddLine />
          <TaskList />
        </div>
      </div>
    </TasksContextProvider>
  );
}

export default App;
