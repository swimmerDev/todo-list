import React, { createContext, useMemo, useState, useContext, useEffect } from "react";
import { DataTask } from "../types/types";

type TasksContextState = {
  tasks: DataTask[];
  addTask: (description: string) => void;
  deleteTask: (id: number) => void;
  setCompleteTask: (id: number, checked: boolean) => void;
};

export const TasksContext = React.createContext<TasksContextState>({} as TasksContextState);

const loadFromLocalStorage = (key: string) => {
  let tasks:DataTask[] = [ {"id": 0, "description":""} ];
  if (localStorage.getItem(key)) {
    tasks = JSON.parse(localStorage.getItem(key) ?? "");
    return tasks.filter((task:DataTask) => !task.dueDate);
  } else {
    return [];
  }
};

export const TasksContextProvider = ({children}: React.PropsWithChildren<{}>) => {
  const dataKey: string = "tasks";
  const [tasks, setTasks] = useState<DataTask[]>(loadFromLocalStorage(dataKey));

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(tasks));
  }, [tasks]);

  const value = useMemo(() => ({
    tasks: tasks,
    addTask: (description: string) => {
      setTasks((prev) => [...prev, { id: Date.now(), description: description }]);
    },
    deleteTask: (id: number) => {   
      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    setCompleteTask: (id: number, checked: boolean) => {
      setTasks((prev) => prev.map((task: DataTask) => {
        if (task.id === id) {
          if (checked) 
              task.dueDate = Date.now();
          else 
              task.dueDate = undefined;
        }
        return task;
      }));
    },
  }), [tasks]);

  return (
    <TasksContext.Provider value={value}>
        {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = (): TasksContextState =>
  useContext(TasksContext);