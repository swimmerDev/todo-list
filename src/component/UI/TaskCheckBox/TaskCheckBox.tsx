import React from "react";
import classes from "./TaskCheckBox.module.css"

type TaskCheckBoxProps = {
    checked: boolean,
    onChange?: () => void,
};

const TaskCheckBox = (props:TaskCheckBoxProps) => {
    return (
        <div className={classes.TaskCheckBox}>
            <input type="checkbox" checked={props.checked} onChange={props.onChange} />
            <span className={classes.checkmark}></span>
        </div>
    )
}

export default TaskCheckBox;