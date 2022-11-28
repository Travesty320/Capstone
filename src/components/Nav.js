import React from 'react'
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useUserAuth } from '../UserAuthContext';




export default function Nav() {

    // signOut(auth).then(() => {
    // }).catch((error) => {
    // });
    const { logOut, user } = useUserAuth()

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
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => { logOut() }}>Log Out</Link>
                            </li>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    View Products
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/dairy">Dairy</Dropdown.Item>
                                    <Dropdown.Item href="/meat">Meat</Dropdown.Item>
                                    <Dropdown.Item href="/produce">Produce</Dropdown.Item>
                                    <Dropdown.Item href="/snacks">Snacks</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/cart">{this.props.cart.length} | {this.getTotal(this.props.cart)}</Link>
                            </li> */}
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

