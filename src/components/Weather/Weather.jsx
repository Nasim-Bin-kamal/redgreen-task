import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import { Card, Col, Row } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import weatherIcon from '../../images/Light.png';



const Weather = () => {
    const currentTime = new Date();
    const displayTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const date = new Date().toUTCString();
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.3563&exclude=daily,minutely&appid=2b63c0ec704aeed8dba790b11e33e9fe`)
            .then(res => res.json())
            .then(data => setWeather(data))
    }, [])

    console.log('we', weather);

    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-2 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Weather</h4>
                    <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                </div>
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={5}>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h3 className={styles.currentTime}>{displayTime}</h3>
                                <img className='img-fluid' src={weatherIcon} alt="" />
                                <h5 className={styles.weatherDesc}>Cloudy Sunny, 24C</h5>
                            </div>

                        </Col>
                        <Col xs={12} md={12} lg={7}>
                            <div>
                                <p className={styles.date}>{date}</p>
                                <ul>
                                    <li>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`d-flex justify-content-between ${styles.hourlyWeather}`}>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card >
        </div >
    );
};

export default Weather;