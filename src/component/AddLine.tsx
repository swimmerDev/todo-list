import React from "react";
import PlusIcon from "./UI/PlusIcon/PlusIcon";
import AddInput from "./UI/AddInput/AddInput";
import AddButton from "./UI/AddButton/AddButton";
import AddSep from "./UI/AddSep/AddSep";

const AddLine = () => {
    const [input, setInput] = React.useState<string>("");

    return (
        <>
        <div className="AddLineConten">
            <PlusIcon/>
            <div className="AddLineInput">
                <AddInput 
                    type="text"
                    placeholder="Add new task" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    />
            </div>
            <AddButton> Add </AddButton> 
        </div>
        <AddSep />
        </>
    );
};

export default AddLine;