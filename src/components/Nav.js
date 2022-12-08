import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useUserAuth } from '../UserAuthContext';






export default function Nav() {
    const { logOut, user, cart } = useUserAuth()


    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Welcome</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {user ?
                        <>
                            <div className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => { logOut() }}>Log Out</Link>
                            </div>
                            <Dropdown className='ddmenu'>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    View Products
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='menu bg-warning'>
                                <Dropdown.Item><Link style={{textDecoration: 'none'}} to="/dairy">Dairy</Link></Dropdown.Item>
                                <Dropdown.Item><Link style={{textDecoration: 'none'}} to="/meat">Meat</Link></Dropdown.Item>
                                <Dropdown.Item><Link style={{textDecoration: 'none'}} to="/produce">Produce</Link></Dropdown.Item>
                                <Dropdown.Item><Link style={{textDecoration: 'none'}} to="/snacks">Snacks</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <div className="nav-item">
                            
                                <Link className="nav-link active" to="/cart">Cart</Link>
                            
                            </div>
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

