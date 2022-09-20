import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import { Card, Col, Row } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';




const Weather = () => {
    const currentTime = new Date();
    const displayTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [weather, setWeather] = useState({});

    const date = new Date().toLocaleDateString(undefined, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        weekday: 'short'
    });

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.3563&exclude=daily,minutely&appid=2b63c0ec704aeed8dba790b11e33e9fe`)
            .then(res => res.json())
            .then(data => setWeather(data))
    }, [])

    console.log('we', weather);
    const { current, hourly } = weather || {};

    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-3 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Weather</h4>
                    <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                </div>
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={5}>
                            <div className='py-2 d-flex flex-column justify-content-center align-items-center'>
                                <h3 className={styles.currentTime}>{displayTime}</h3>
                                <img className='img-fluid w-75' src={`https://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`} alt="" />
                                <h5 className={styles.weatherDesc}>{current?.weather[0]?.description}, {parseInt(current?.temp - 273.15)}°C</h5>
                                <p></p>
                            </div>

                        </Col>
                        <Col xs={12} md={12} lg={7}>
                            <div>
                                <div>
                                    <p className={`ps-4 ${styles.date}`}>{date} <span className='ps-3'><AiOutlineLeft className={styles.arrow} /> <AiOutlineRight className={styles.arrow} /> </span></p>
                                </div>
                                <ul>
                                    <li className={styles.hourlyWeather}>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li className={styles.hourlyWeather}>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li className={styles.hourlyWeather}>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li className={styles.hourlyWeather}>
                                        <div className='d-flex justify-content-between'>
                                            <p>10:00 AM</p>
                                            <p>Light Rain, 27°C</p>
                                        </div>
                                    </li>
                                    <li className={styles.hourlyWeather}>
                                        <div className={`d-flex justify-content-between `}>
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