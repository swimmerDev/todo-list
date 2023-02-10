import React from "react";
import classes from "./AddSep.module.css"

type AddSepProps = {
    active?: boolean;
}

const AddSep = ({active}:AddSepProps) => {
    const rootClasses:string[] = [classes.separator]

    if (active) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(" ")}/>
    )
}
export default AddSep;