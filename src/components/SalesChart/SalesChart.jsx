import React from 'react';
import styles from './SalesChart.module.css';
import { Card, Form } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PieChart from '../PieChart/PieChart';

const SalesChart = () => {
    return (
        <div className={`mb-3 ${styles.salesSection}`}>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-2 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Sales Chart</h4>
                    <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                </div>
                <div className='py-1 d-flex justify-content-between align-items-center'>
                    <div>
                        <p className={`mb-1 ${styles.sale}`}>Monthly Sales</p>
                        <h3 className={`${styles.salesAmount}`}>156</h3>
                    </div>
                    <Form >
                        <input className={`p-1 rounded-2 ${styles.monthInput}`} type="month" name="" id="" />

                    </Form>
                </div>
                <PieChart />
            </Card>

        </div>
    );
};

export default SalesChart;