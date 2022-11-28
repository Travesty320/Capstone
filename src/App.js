import React from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
// import Cart from './views/Cart';
import Dairy from './views/Dairy';
import Produce from './views/Produce';
import Meat from './views/Meat';
import Snacks from './views/Snacks';
import { UserAuthContextProvider } from "./UserAuthContext";



function App() {

//  const [registerEmail, setRegisterEmail] = useState("");
//  const [registerPassword, setRegisterPassword] = useState("");


//  const [loginEmail, setLoginEmail] = useState("");
//  const [loginPassword, setLoginPassword] = useState("");

//   const signup = async () => {

//   };

//   const login = async () => {

//   };
  
//   const signout = async () => {

  // };

  return (

    <Router>
        <Nav />
        <div> 
         
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              {/* <Route path='/cart' element={<Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />} /> */}
              <Route path='/dairy' element={<Dairy />} />
              <Route path='/produce' element={<Produce />} />
              <Route path='/meat' element={<Meat />} />
              <Route path='/snacks' element={<Snacks />} />
            </Routes>
            
        </div>
    </Router>
  );
}


export default App;

