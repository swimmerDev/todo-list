import React from "react";
import classes from "./AddInput.module.css"

type AddInputProps = {
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const AddInput = React.forwardRef((props:AddInputProps, ref) => {
    return (
        <input {...props} className={classes.AddInput}/>
    );
});

export default AddInput;