import React from 'react'
import { useUserAuth } from "../UserAuthContext";
import { getDatabase, ref, set, remove } from "firebase/database";


export default function Cart() {

  const { cart, user, setCart } = useUserAuth();
  const db = getDatabase();
  const addToDB = (cart) => {
    const db = getDatabase();
    set(ref(db, `/${user.uid}/cart`), cart)
    console.log(cart)
  };

  const addToCart = (item) => {
    const newCart = { ...cart };
    if (item.id in newCart) {
      newCart[item.id].qty++;
    }
    else {
      newCart[item.id] = item
      newCart[item.id].qty = 1
    }
    newCart.size++

    setCart(newCart)
    if (user.uid) {
      addToDB(newCart)
    }
  };


  const removeFromCart = (item) => {
    const newCart = { ...cart };
    if (item.id in newCart) {
      if (newCart[item.id].qty > 0) {
        newCart[item.id].qty--;
        newCart.size--
        if (newCart[item.id].qty === 0) {
          const itemRef = ref(db, 'cart');
          remove(itemRef).then(() => {
            console.log("location removed");
          });
        }
      };
    }
    setCart(newCart)
    if (user.uid) {
      addToDB(newCart)
    }
  }



  console.log(cart)

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
          <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(cart).map(key => key === 'size' ? <></> :
          <tr>
            <td>{cart[key].description}</td>
            <td><img style={{ height: '2rem' }} src={cart[key].img} /></td>
            <td>${cart[key].price}</td>
            <td><button className='btn mr-1' onClick={() => { removeFromCart(cart[key]) }}>-</button>{cart[key].qty}<button className='btn ml-1' onClick={() => { addToCart(cart[key]) }}>+</button></td>
            <td>${(cart[key].price * cart[key].qty).toFixed(2)}</td>

          </tr>
        )}

      </tbody>
    </table>

  )
}
