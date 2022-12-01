import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useUserAuth } from '../UserAuthContext';
import { getDatabase, ref, set, child, get } from "firebase/database";





export default function Nav() {
    const { logOut, user, cart, setCart } = useUserAuth()

    const getTotal = (cart) => {
        let total = 0;
        for (let item of cart) {
            total = total + parseFloat(item.price)
        }
        return total.toFixed(2)
    }
    

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Welcome</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {user ?
                        <>
                            <div className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => { logOut() }}>Log Out</Link>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    View Products
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Link to="/dairy"><Dropdown.Item>Dairy</Dropdown.Item></Link>
                                <Link to="/meat"><Dropdown.Item>Meat</Dropdown.Item></Link>
                                <Link to="/produce"><Dropdown.Item>Produce</Dropdown.Item></Link>
                                <Link to="/snacks"><Dropdown.Item>Snacks</Dropdown.Item></Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">{ getTotal }</Link>
                            </li>
                        </>
                        :
                        <>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </>
                    }
                </div>
            </div>
        </nav>



    )
}

