import React from 'react';
import styles from './TotalSales.module.css';
import { Card, Col, Row } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import LineChart from '../LineChart/LineChart';


const TotalSales = () => {
    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-4 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Total Sale</h4>
                    <div>
                        <input className={`p-1 rounded-2 me-lg-4 ${styles.monthInput}`} type="month" name="" id="" />
                        <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                    </div>
                </div>
                <div className='mt-3'>
                    <Row>
                        <Col xs={12} md={3} lg={3}>
                            <div className='mb-3'>
                                <p className={`my-1 ${styles.product}`}>TV</p>
                                <h5 className={styles.price}>600.000</h5>
                            </div>
                            <div className='mb-3'>
                                <p className={`my-1 ${styles.product}`}>Laptop</p>
                                <h5 className={styles.price}>1200.000</h5>
                            </div>
                            <div className='mb-3'>
                                <p className={`my-1 ${styles.product}`}>Others</p>
                                <h5 className={styles.price}>210.000</h5>
                            </div>
                        </Col>
                        <Col xs={12} md={9} lg={9}>
                            <LineChart />
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    );
};

export default TotalSales;