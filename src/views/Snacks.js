import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
import { getDatabase, ref, set } from "firebase/database";




function ViewCatalog() {
    const { user, cart, setCart } = useUserAuth();
    const [Snacks, setSnacks] = useState([]);
    const SnacksCollectionRef = collection(db, "Snacks")
    useEffect(() => {
        const getSnacks = async () => {
            const data = await getDocs(SnacksCollectionRef);
            console.log(data)
            setSnacks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getSnacks();
    }, []);
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

    return (

        <div className='row'>
            {
                Snacks.map((Snacks) => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <div key="{snack.id}">
                                <img src={Snacks.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">{Snacks.description}</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${Snacks.price.toFixed(2)}</li>
                                </ul>
                                <div className="card-body">
                                        <button className="card-link btn-warning" onClick={()=>{addToCart(Snacks)}}>Add to Cart</button>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }</div>
    )
}
export default ViewCatalog;