import React from 'react';
import { Button, Container, Dropdown, DropdownButton, Form, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import styles from './Header.module.css';
import { BiSearch } from "react-icons/bi";
import notificationIcon from '../../images/clarity_notification-solid-badged.png';
import profileIcon from '../../images/Frame.png';



const Header = () => {
    return (
        <Navbar className='shadow-sm' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img className='ms-2 me-5 mb-2' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <InputGroup className="mb-3">
                            <Form.Control
                                className={`border-0 rounded-1 ${styles.searchInput}`}
                                placeholder="Search"
                                type='search'

                            />
                            <Button className={`border-0 ${styles.button}`} variant='outline-secondary'>
                                <BiSearch />
                            </Button>
                        </InputGroup>
                    </Nav>
                    <img className='img-fluid mx-3' src={notificationIcon} alt="" />
                    <div className='d-flex mx-3'>
                        <img className='img-fluid' src={profileIcon} alt="" />
                        <DropdownButton
                            className={styles.dropButton}
                            size='sm'
                            variant="outline-none"
                            title="Riandra"
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item href="#">Profile</Dropdown.Item>
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                        </DropdownButton>
                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;