import React from "react";
import { customResultModel } from "../../Interfaces";

const CustomResult: React.FC<customResultModel> = ({result, error}) => {
    return(
        <div>
            <div style={{paddingTop: '1rem'}}>
                {error ? (
                    <p style={{color: 'red'}}>Error: {error}</p>
                ) : (
                    result && (
                        <ul>
                            <li>Data: {result.data}</li>
                            <li>State: {result.state}</li>
                            <li>Length: {result.length}</li>
                        </ul>
                    )
                )}
            </div>
        </div>
    );
};

export default CustomResult;