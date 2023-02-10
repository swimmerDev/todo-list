import React from "react";
import TaskCheckBox from "./UI/TaskCheckBox/TaskCheckBox";
import AddSep from "./UI/AddSep/AddSep";
import TaskDate from "./UI/TaskDate/TaskDate";

const TaskItem = () => {
    const optionsDate:Intl.DateTimeFormatOptions = {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }
    return (
        <div>
            <div className="TaskItemContent">
                <TaskCheckBox checked={false}/>
                <label> sdfjnsdjnldnsadas asdasdasd asdasdasd asdasdasdasd asdasdasd asdasdsad fljsd </label>
                <TaskDate time={Date.now()} lang={"en-US"} options={optionsDate} />
            </div>
            <AddSep />
        </div>
    );
};

export default TaskItem;