import React from 'react';
import { Card, Form } from 'react-bootstrap';
import styles from './Sale.module.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import salesIcon from '../../images/Two Cars Collide.png';

const products = [
    {
        name: 'Chuwi Laptop',
        state: '21/09/2022 - Israfil Arif',

    },
    {
        name: 'OnePlus TV',
        state: '20/09/2022 - Debashish D. Dev',

    },
    {
        name: 'UMI Phone',
        state: '16/09/2022 - JSajib Hossain',

    }
];


const Sale = () => {
    return (
        <div className='mb-3'>
            <Card className='p-3 border-opacity-75 shadow-sm rounded-3'>
                <div className='pb-2 d-flex justify-content-between align-items-center'>
                    <h4 className={styles.title}>Sale</h4>
                    <BsThreeDotsVertical className={`fs-5 ${styles.threeDot}`} />
                </div>

                <div className='py-1 d-flex justify-content-between align-items-center'>
                    <div>
                        <p className={`mb-1 ${styles.sale}`}>Monthly Sales</p>
                        <h3 className={`${styles.salesAmount}`}>918</h3>
                    </div>
                    <Form >
                        <input className={`p-1 rounded-2 ${styles.monthInput}`} type="month" name="" id="" />
                    </Form>
                </div>
                {
                    products?.map((product, p_id) => (
                        <div className='p-2 d-flex justify-content-between align-items-center border-bottom' key={p_id}>
                            <div className='d-flex justify-content-start align-items-center gap-2'>
                                <Card className='p-1 rounded-3'>
                                    <img className='img-fluid' src={salesIcon} alt="" />
                                </Card>
                                <div>
                                    <p className={`m-0 ${styles.content}`}>{product?.name}</p>
                                    <p className={styles.state}>{product?.state} increase</p>
                                </div>
                            </div>
                            <p className={styles.btnDetails}>Details</p>
                        </div >
                    ))
                }
                <p className={styles.btnShowMore}>Show more</p>

            </Card >
        </div >
    );
};

export default Sale;