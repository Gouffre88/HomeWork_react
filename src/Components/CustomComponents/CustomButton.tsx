import React from "react";
import {customButtonModel} from '../../Interfaces';

const CustomButton: React.FC<customButtonModel> = ({ onClick, text}) =>{
    return(
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default CustomButton;