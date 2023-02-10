import React from "react";
import classes from "./TaskCheckBox.module.css"

type TaskCheckBoxProps = {
    checked: boolean,
    onClick?: () => void,
};

const TaskCheckBox = (props:TaskCheckBoxProps) => {
    return (
        <div className={classes.TaskCheckBox}>
            <input type="checkbox" />
            <span className={classes.checkmark} onClick={props.onClick}></span>
        </div>
    )
}

export default TaskCheckBox;