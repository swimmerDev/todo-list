import React, { useEffect, useState } from "react";
import TaskDate from "./UI/TaskDate/TaskDate";
import { DataTask } from "../types/types";
import { useTasksContext } from "../context/TaskContext";
import classes from "./TaskItem.module.css";

type TaskItemsProps = {
  task: DataTask;
};

const delay = 60000;

const optionsDate: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "2-digit",
  year: "numeric",
};

const TaskItem = ({ task }: TaskItemsProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<any>();

  const { setCompleteTask, deleteTask } = useTasksContext();

  useEffect(() => {
    setCompleteTask(task.id, checked);
    checked && setTheme(classes.checked);
    !checked && setTheme("");
  }, [checked]);

  return (
    <div>
      <div className="TaskItemContent">
        <div className={classes.TaskCheckBox}>
          <input className={theme} type="checkbox" />
          <span
            className={classes.checkmark}
            onClick={() => {
              setChecked(!checked);
              if (!checked) {
                let id = setTimeout(() => {
                  deleteTask(task.id);
                }, delay);
                setTimeoutId(id);
              } else {
                clearInterval(timeoutId);
              }
            }}
          ></span>
        </div>
        <label className={theme}> {task.description} </label>
        {task.dueDate && (
          <TaskDate time={task.dueDate} lang={"en-US"} options={optionsDate} />
        )}
      </div>
      <div className="Separator" />
    </div>
  );
};

export default TaskItem;
