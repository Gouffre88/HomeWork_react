import React from "react";
import { customInputModel } from "../../Interfaces";

const CustomInput: React.FC<customInputModel> = ({value, onChange}) => {
    return(
        <input type="text" value={value} onChange={onChange} />
    );
};

export default CustomInput;