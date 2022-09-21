import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './PopularProduct.module.css';
import { BsThreeDotsVertical } from "react-icons/bs";

const products = [
    {
        title: 'TV',
        name: 'OnePlus TV 44 Inch',
        state: { positive: '10%' },
        quantity: '5K'
    },
    {
        title: 'Mb',
        name: 'UMI Smartphone',
        state: { positive: '17%' },
        quantity: '4.5K'
    },
    {
        title: 'JP',
        name: 'Chuwi Laptop',
        state: { positive: '20%' },
        quantity: '2K'
    },
    {
        title: 'JP',
        name: 'Oneplut TV Y1G',
        state: { positive: '1%' },
        quantity: '1.5K'
    },
    {
        title: 'JP',
        name: 'Earphone',
        state: { negative: '-1%' },
        quantity: '1.4K'
    },
    {
        title: 'JP',
        name: 'Charger',
        state: { negative: '-5%' },
        quantity: '1.3K'
    },
    {
        title: 'JP',
        name: 'Cable',
        state: { negative: '-50%' },
        quantity: '1.2K'
    },
    {
        title: 'JP',
        name: 'Electric Car',
        state: { negative: '-5%' },
        quantity: '900'
    },
    {
        title: 'JP',
        name: 'ERP Software',
        state: { positive: '5%' },
        quantity: '870'
    },
    {
        title: 'JP',
        name: 'Attendance System',
        state: { positive: '6%' },
        quantity: '720'
    }
];


const PopularProduct = () => {
    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-3 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Most Popular Product</h4>
                    <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                </div>
                {
                    products?.map((product, p_id) => (
                        <div className='p-2 d-flex justify-content-between align-items-center border-bottom' key={p_id}>
                            <div className='d-flex justify-content-start align-items-center gap-2'>
                                <Card className='p-2 rounded-3'>
                                    <h5 className={styles.productTitle}>{product?.title}</h5>
                                </Card>
                                <div>
                                    <p className={`m-0 ${styles.content}`}>{product?.name}</p>
                                    {
                                        product?.state?.positive ? (
                                            <p className={styles.state}>{product?.state?.positive} increase</p>
                                        ) : (

                                            <p className={styles.negativeState}>{product?.state?.negative} increase</p>

                                        )
                                    }
                                </div>
                            </div>
                            <p className={styles.quantity}>{product?.quantity}</p>
                        </div >
                    ))
                }
                <p className={styles.btnShowMore}>Show more</p>

            </Card >
        </div >
    );
};

export default PopularProduct;