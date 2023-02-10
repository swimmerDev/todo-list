import React from "react";
import classes from "./TaskTitle.module.css"
type TaskTitleProps = {
    [key: string]: string,
    children: string;
}

const TaskTitle = ({children}:TaskTitleProps) => {
    return (
        <>
        <h1 className={classes.title}> {children}</h1>
        </>
    )
};

export default TaskTitle;