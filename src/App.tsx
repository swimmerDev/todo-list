import React, { useState } from 'react';
import "./styles/App.css";
import MainTitle from './component/UI/MainTitle/MainTitle';
import TaskTitle from './component/UI/TaskTitile/TaskTitle';
import AddLine from './component/AddLine';
import { ThemeContextType } from './context/ThemeContext';
import { TasksContextProvider } from './context/TaskContext';
import TaskList from './component/TaskList';

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <div className="App">
      <MainTitle > Task Manager </MainTitle>
      <div className='taskBG'>
        <TaskTitle>Work</TaskTitle>
        <TasksContextProvider>
          <AddLine />
          <TaskList />
        </TasksContextProvider>
      </div>
    </div>
  );
}

export default App;
