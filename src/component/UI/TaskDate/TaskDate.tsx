import React from "react";
import classes from "./TaskDate.module.css"

type TaskDataProps = {
    time: number,
    lang?: string,
    options?:Intl.DateTimeFormatOptions,
};

const TaskData = ({time, lang, options}:TaskDataProps) => {
    const date = new Date(time);
    return (
        <div className={classes.TaskData}>
            {date.toLocaleDateString(lang, options)}
        </div>
    );
}

export default TaskData;