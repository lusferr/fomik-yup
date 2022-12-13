import React from "react";
import InputMask from 'react-input-mask';
import { FieldHookConfig, useField } from "formik";

interface maskedInputProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    id: string;
    name: string;
    mask: string;
    label?: string;
}


export default function MaskedInput(props: maskedInputProps & FieldHookConfig<any>) {
    const [inputProps, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <InputMask 
            id={props.id}
            mask={props.mask}
            {...inputProps}
            />
            {meta.touched && meta.error &&<div>{meta.error.toString()}</div>}
        </div>
    );
};