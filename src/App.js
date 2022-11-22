import React from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
// import Cart from './views/Cart';
// import Dairy from './views/Dairy';
// import Produce from './views/Produce';
// import Meat from './views/Meat';
// import Snacks from './views/Snacks';
import { UserAuthContextProvider } from './UserAuthContext';
import "./UserAuthContext";


function App() {

  return (

    <Router>
        <Nav />
        <div>
          <UserAuthContextProvider>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login LogIn={this.LogIn} />} />
              <Route path='/signup' element={<SignUp createUserWithEmailAndPassword={this.createUserWithEmailAndPassword} />} />
              {/* <Route path='/cart' element={<Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />} />
              <Route path='/dairy' element={<Dairy addToCart={this.addToCart} />} />
              <Route path='/produce' element={<Produce addToCart={this.addToCart} />} />
              <Route path='/meat' element={<Meat addToCart={this.addToCart} />} />
              <Route path='/snacks' element={<Snacks addToCart={this.addToCart} />} /> */}

            </Routes>
          </UserAuthContextProvider>
        </div>
    </Router>
  );
}


export default App;

