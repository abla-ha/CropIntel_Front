import Panel from '../Panel';
import './index.css'
import { useState } from 'react';
import CIProgress from '../CIProgress';
export default function DashboardLeftSide() {

    const [soilData, setSoilData] = useState([
        {
            "name": "Soil Moisture",
            "value": "45%"
        },
        {
            "name": "Soil Temperature",
            "value": "22°C"
        },
        {
            "name": "Soil pH",
            "value": "6.8"
        },
        {
            "name": "Soil Organic Matter",
            "value": "5%"
        }
    ]);

    const [weatherData, setWeatherData] = useState([
        {
            "name": "Air Temperature",
            "value": "25°C"
        },
        {
            "name": "Humidity",
            "value": "60%"
        },
        {
            "name": "Wind",
            "value": "5 m/s from NE"
        },
        {
            "name": "Solar Radiation",
            "value": "800 W/m²"
        }
    ]);

    const [cropsData, setCropsData] = useState([
        {
            "name": "Wheat",
            "value": 15
        },
        {
            "name": "Potato",
            "value": 15
        },
        {
            "name": "Corn",
            "value": 15
        }
    ]);

    return (
        <Panel className="dashboardleftside">
            <div>
                <h2>Indicators</h2>
                <div className='indicators-container'>
                    <div className='soil-indicator'>
                        <div>
                            <p className='title'>Soil</p>
                            <div>
                                <img src={'/images/menu-icons/moisture-black.svg'} alt="moisture icon" />
                            </div>
                        </div>
                        {
                            soilData.map((soilData, index) => {
                                return (
                                    <div key={JSON.stringify(soilData) + index}>
                                        <p>{soilData.name}</p>
                                        <b>{soilData.value}</b>
                                    </div>
                                );
                            })
                        }
                        <br />
                    </div>

                    <div className='weather-indicator'>
                        <div>
                            <p className='title'>Weather</p>
                            <div>
                                <img src={'/images/menu-icons/weather-black.svg'} alt="weather icon" />
                            </div>
                        </div>
                        {
                            weatherData.map((weatherData, index) => {
                                return (
                                    <div key={JSON.stringify(weatherData) + index}>
                                        <p>{weatherData.name}</p>
                                        <b>{weatherData.value}</b>
                                    </div>
                                );
                            })
                        }
                        <br />
                    </div>
                </div>
            </div>

            <div>
                <h2>Crops</h2>
                <br />
                <div className='crops-container'>
                {
                    cropsData.map((cropData, index) => {
                        return (
                            <div key={JSON.stringify(cropData) + index}>
                                <div>
                                    <p>{cropData.name}</p>
                                    <p>{cropData.value}t</p>
                                </div>
                                <CIProgress
                                    value={cropData.value}
                                    max={30}
                                />
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </Panel>
    );
}