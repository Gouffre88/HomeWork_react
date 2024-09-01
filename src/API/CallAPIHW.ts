import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import ApiResponseModel from '../Interfaces/ApiResponseModel';


const ApiHWCall = async (input: string):  Promise<ApiResponseModel> => {
    try {
        const response = await axios.get<ApiResponseModel>(`https://localhost:7120/WeatherForecast/GetData?request=${input}`);
        return response.data;
    } catch(error){
        if (axios.isAxiosError(error)) {
            const AxiosError = error as AxiosError;
            throw new Error(AxiosError.message);
        } else {
            throw new Error('An unknow error occurred.');
        }
    }
};

export default ApiHWCall;