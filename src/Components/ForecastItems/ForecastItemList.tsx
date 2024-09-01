import React, { PureComponent } from 'react';
import {useState, useEffect} from 'react';
import { forecastItemModel } from '../../Interfaces';
import ForecastItemCard from './ForecastItemCard';
import axios from 'axios';

function ForecastItemList() {
    const [forecatsItems, setForecastItems] = useState<forecastItemModel[]>([]);


    useEffect(() => {
        axios.get("https://localhost:7120/WeatherForecast").then((data)=>{
            setForecastItems(data.data);
        })
    },[]);

    return(
        <div className='container row'>
            {forecatsItems.map((forecatsItem,index)=>
            (
                <ForecastItemCard forecastItem={forecatsItem} key = {index} />
            ))}
        </div>
    )
}

export default ForecastItemList;