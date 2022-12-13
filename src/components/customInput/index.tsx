import { FieldHookConfig, useField } from "formik";
import React from "react";
import './style.css'

interface inputProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    > {
    id: string;
    label: string;
    className?: string;
    mask?: "cep" | "cnpj" | "normalizePhoneNumber";
    name: string;
}

export default function CustomInput(props: inputProps & FieldHookConfig<any>) {
    const [inputProps, meta] = useField(props);

    return (
        <div className="inputControl">
            <label htmlFor={props.id}>{props.label}</label>
            <input {...inputProps} {...props} className={meta.touched && meta.error ? "input-error" : ""}/>
            {meta.touched && meta.error &&<div>{meta.error.toString()}</div>}
        </div>
    );
}
