import React from "react";
import PlusIcon from "./UI/PlusIcon/PlusIcon";
import AddInput from "./UI/AddInput/AddInput";
import AddButton from "./UI/AddButton/AddButton";
import AddSep from "./UI/AddSep/AddSep";
import { useTasksContext } from "../context/TaskContext";

const AddLine = () => {
    const [input, setInput] = React.useState<string>("");
    const [disabled, setDisabled] = React.useState<boolean>(false);
    const [visible, setVisible] = React.useState<boolean>(false);
    const [focus, setFocus] = React.useState<boolean>(false);

    const {addTask} = useTasksContext();

    React.useEffect(() => {
        focus && setVisible(true);
        input && setDisabled(false);
        !input && setDisabled(true);
        !focus && !input && setVisible(false);

    }, [focus, input]);

    const addToList= () => {
        downEnter();
    }
    const downEnter = () => {
        addTask(input);
        setInput("");
    };

    return (
        <div>
            <div className="AddLineConten">
                <PlusIcon/>
                <div className="AddLineInput">
                    <AddInput 
                        type="text"
                        placeholder="Add new task" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onKeyDown={(e:React.KeyboardEvent<Element>) => e.key === "Enter" && input && downEnter()}
                        />
                </div>
                <AddButton disabled={disabled} visible={visible} onClick={addToList}> Add </AddButton> 
            </div>
            <AddSep active={focus}/>
        </div>
    );
};

export default AddLine;