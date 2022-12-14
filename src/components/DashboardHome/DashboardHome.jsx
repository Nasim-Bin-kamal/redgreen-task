import React from 'react';
import { Alert, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import styles from './DashboardHome.module.css';
import { FaMapMarkedAlt, FaUser } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { AiFillMessage, AiFillSetting } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import rainyIcon from '../../images/Rainy.png';
import PopularProduct from '../PopularProduct/PopularProduct';
import Sale from '../Sale/Sale';
import TotalSales from '../TotalSales/TotalSales';
import SalesChart from '../SalesChart/SalesChart';
import Weather from '../Weather/Weather';





const DashboardHome = () => {

    return (
        <div className='mx-auto'>
            <Container fluid className="mx-auto">
                <Tab.Container >
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} >
                        <Col xs={12} sm={12} md={3} lg={2} xl={2} className={styles.sidebarSection}>
                            <div className={styles.dashboardSidebar}>
                                <p className={styles.menu}>MENU</p>
                                <Nav variant="light" className={`flex-column ${styles.dashNav}`}>

                                    <Nav.Link className='ms-3' to="dashboard"><span className="me-2"><MdInsertChart /></span>Dashboard</Nav.Link>
                                    <Nav.Link className='ms-3' to="maps"><span className="me-2"><FaMapMarkedAlt /></span>Maps</Nav.Link>
                                    <Nav.Link className='ms-3' to="menu"><span className="me-2"><CgMenuBoxed /></span>Menu</Nav.Link>
                                    <Nav.Link className='ms-3' to="menu"><span className="me-2"><AiFillMessage /></span>Menu</Nav.Link>

                                </Nav>
                                <p className={styles.others}>OTHERS</p>
                                <Nav variant="light" className={`flex-column ${styles.dashNav}`}>

                                    <Nav.Link className='ms-3' to="settings"><span className="me-2"><AiFillSetting /></span>Settings</Nav.Link>
                                    <Nav.Link className='ms-3' to="accounts"><span className="me-2"><FaUser /></span>Accounts</Nav.Link>
                                    <Nav.Link className='ms-3' to="helps"><span className="me-2"><BsFillInfoSquareFill /></span>Helps</Nav.Link>
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={9} lg={10} xl={10}>
                            <div className="pt-4 px-2" >
                                <h6 className={`pb-2 ${styles.dashboardTitle}`}>Redgreen Sales</h6>
                                <div>
                                    <Alert className={` d-flex flex-row justify-content-start gap-3 ${styles.notificationAlert}`} dismissible>
                                        <div>
                                            <img className='img-fluid' src={rainyIcon} alt="" />
                                        </div>
                                        <div className=''>
                                            <h6 className={styles.notification}>Notification</h6>
                                            <p className={styles.notificationMsg}>You dont have enough stock for the next campaign.</p>
                                        </div>
                                    </Alert>
                                </div>

                            </div>
                            <Row className='px-2'>
                                <Col xs={12} md={12} lg={8}>
                                    <TotalSales />
                                </Col>
                                <Col xs={12} md={12} lg={4}>
                                    <SalesChart />
                                </Col>
                            </Row>
                            <Row className='px-2'>
                                <Col xs={12} md={12} lg={6}>
                                    <PopularProduct />
                                </Col>
                                <Col xs={12} md={12} lg={6}>
                                    <Sale />
                                    <Weather />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container >
        </div >
    );
};

export default DashboardHome;