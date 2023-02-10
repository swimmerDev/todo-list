import React from "react";
import classes from "./MainTitike.module.css"
type MainTitleProps = {
    [key: string]: string,
    children: string;
}

const MainTitle = ({children}:MainTitleProps) => {
    return (
        <>
        <h1 className={classes.title}> {children}</h1>
        </>
    )
};

export default MainTitle;