import React, {useState} from 'react';
import { CustomButton ,CustomInput, CustomResult } from '../Components/CustomComponents';
import ApiHWCall from '../API/CallAPIHW';
import { ApiResponseModel } from '../Interfaces';

const HW1: React.FC = () =>{
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<ApiResponseModel | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async() => {
        try{
            const response = await ApiHWCall(inputValue);
            setResult(response);
            setError(null);
        }catch(error){
            if(error instanceof Error){
                setError(error.message);
            } else{
                setError('An unknown erroe occured');
            }
            setResult(null);
        }
    };

    return(
        <div style={{
            position: 'absolute',
            top: '20vh',
            left: '50vw',
            transform: 'translate(-50%, -50%)',
            border: '1px solid black',
            padding: '20px',
        }}>
            <CustomInput value={inputValue} onChange={handleInputChange} />
            <CustomButton onClick={handleButtonClick} text='Submit' />
            <CustomResult result={result} error={error} />
        </div>
    );
}

export default HW1;