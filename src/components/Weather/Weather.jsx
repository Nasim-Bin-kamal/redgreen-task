import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import { Card } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';

// 2b63c0ec704aeed8dba790b11e33e9fe


const Weather = () => {
    const [weather, setWeather] = useState({});
    const apikey = 'b7c572fad6efc8a4b3ae67e021d9cf34';
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=2b63c0ec704aeed8dba790b11e33e9fe`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-2 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Weather</h4>
                    <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                </div>
                <div>

                </div>
            </Card>
        </div>
    );
};

export default Weather;