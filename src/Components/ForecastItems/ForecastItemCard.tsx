import React from 'react';
import forecastItemModel from '../../Interfaces/ForecastItemModel';
import {Link} from 'react-router-dom'
let logo = require("../../Images/LogoPicture.png");
let weather = require("../../Images/weather.jpg");

interface Props {
    forecastItem: forecastItemModel;
}

function ForecastItemCard(props: Props){
    return(
        <div className='col-md-4 col-12 p-4'>
            <div className='card' style={{boxShadow: "0 1px 7px 0 rgb(0 0 0 /50%"}}>          
                <img src={weather} style={{height: "auto"}} className="w-100 mt-5 image-box"/>       
                <div className='card-body pt-2'>
                    <div className='row col-40 offset-1 p-4'>
                        <h5 className='card-title'>Дата {props.forecastItem.date}</h5>
                        <p className='card-text'>Температура {props.forecastItem.temperatureC} °C/ {props.forecastItem.temperatureF} °F </p>
                        <p className='card-text'>Описание:{props.forecastItem.summary}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForecastItemCard;