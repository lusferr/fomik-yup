import React from "react";

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

export default function CustomInput({className,id, label, name, mask, ...props}: inputProps) {

    return (
        <div className="inputControl">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </div>
    );
}
