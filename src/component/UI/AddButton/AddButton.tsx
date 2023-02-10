import React from "react";
import classes from "./AddButton.module.css"

type AddButtonProps = {
    disabled: boolean,
    onClick?: () => void,
    children: string,
    visible: boolean,
}

const AddButton = (props:AddButtonProps) => {

    const rootClasses:string[] = [classes.AddButton]

    if (props.visible) {
        rootClasses.push(classes.active);
    }

    return (
        <button className={rootClasses.join(' ')} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default AddButton;