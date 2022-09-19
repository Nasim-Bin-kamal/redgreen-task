import React from 'react';
import styles from './TotalSales.module.css';
import { Card } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import LineChart from '../LineChart/LineChart';


const TotalSales = () => {
    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-2 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Total Sale</h4>
                    <div>
                        <input className={`p-1 rounded-2 me-lg-4 ${styles.monthInput}`} type="month" name="" id="" />
                        <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                    </div>
                </div>
                <div className='mt-3'>
                    <LineChart />
                </div>
            </Card>
        </div>
    );
};

export default TotalSales;