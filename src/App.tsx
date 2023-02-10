import React from 'react';
import "./styles/App.css";
import MainTitle from './component/UI/MainTitle/MainTitle';
import TaskTitle from './component/UI/TaskTitile/TaskTitle';
import AddLine from './component/AddLine';
import TaskItem from './component/TaskItem';

function App() {
  return (
    <div className="App">
      <MainTitle > Task Manager </MainTitle>
      <div className='taskBG'>
        <TaskTitle>Work</TaskTitle>
        <AddLine />
        <TaskItem />
      </div>
    </div>
  );
}

export default App;
