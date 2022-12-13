import React, { useState } from 'react';

export default function PreviewImage(props?: any){

    const [preview, setPreview] = useState<any>("");

    if(props.image){
        const reader = new FileReader();
    
        reader.readAsDataURL(props.image[0]);
        reader.onload = () =>{
            setPreview(reader.result);
        }
    
        return(
            <div>
                <img src={preview} alt="preview" width="420px"/>
            </div>
        );
    }

    return(
        <div>
            Nenhum arquivo selecionado...
        </div>
    );

};