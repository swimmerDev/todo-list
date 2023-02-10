import React from "react";
import classes from "./AddButton.module.css"

type AddButtonProps = {
    children: string,
    disabled?: boolean,
    onClick?: (e: React.SyntheticEvent) => void,
}

const AddButton = (props:AddButtonProps) => {
    return (
        <button className={classes.AddButton} {...props}>
            {props.children}
        </button>
    )
}

export default AddButton;