import React, { useMemo } from "react";
import TaskItem from "./TaskItem";
import { DataTask } from "../types/types";
import { useTasksContext } from "../context/TaskContext";

const TaskList = () => {

    const {tasks} = useTasksContext();

    const reverseSort = (Arr:DataTask[]) => {
        return Arr.sort((a, b) => {
            if (a.id < b.id) {
                return 1;
            }
            if (a.id > b.id) {
                return -1;
            }
            return 0;
        });
    }

    const sortedPosts: DataTask[] = useMemo(() => {
        const completeTask = tasks.filter(task => task.dueDate);
        const notcompleteTask = tasks.filter(task => !task.dueDate);
        return reverseSort(notcompleteTask).concat(reverseSort(completeTask))
        }, [tasks]);

    return (
        <div className="ListTasksContent">
            {sortedPosts.map((task:DataTask) => {
                return (
                    <div key={task.id}>
                        <TaskItem task={task}/>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;