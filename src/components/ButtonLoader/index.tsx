import React, { ReactElement } from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: ReactElement;
    className?: string;
}

export default function ButtonLoader({className, children, ...props}: ButtonProps) {
    const [loading, setLoading] = React.useState<boolean>(false);

    const fetchData = async () =>{
        setLoading(true)

        //fake api call
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }

    return (
        <>
            <button disabled={loading}>{children}
            </button>
        </>
    );
};