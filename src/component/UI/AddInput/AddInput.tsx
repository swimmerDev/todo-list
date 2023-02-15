import React from "react";
import classes from "./AddInput.module.css";

type AddInputProps = {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<Element>) => void;
};

const AddInput = (props: AddInputProps) => {
  return <input {...props} className={classes.AddInput} />;
};

export default AddInput;
