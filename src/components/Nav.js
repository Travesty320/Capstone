import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

signOut(auth).then(() => {
}).catch((error) => {
});


export default class Nav extends Component {




    getTotal = (cart) => {
        let total = 0;
        for (let item of cart) {
            total = total + parseFloat(item.price)
        }
        return total.toFixed(2)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => { this.props.signOut() }}>Log Out</Link>
                            </li>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/dairy">Dairy</Link></li>
                                <li><Link className="dropdown-item" href="/meat">Meat</Link></li>
                                <li><Link className="dropdown-item" href="/produce">Produce</Link></li>
                                <li><Link className="dropdown-item" href="/snacks">Snacks</Link></li>
                            </ul>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">{this.props.cart.length} | {this.getTotal(this.props.cart)}</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        )
    }
}
