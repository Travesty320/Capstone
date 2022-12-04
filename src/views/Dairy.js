import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
import { getDatabase, ref, set } from "firebase/database";


function ViewCatalog() {
    const { user, cart, setCart } = useUserAuth();
    const [Dairy, setDairy] = useState([]);
    const DairyCollectionRef = collection(db, "Dairy")
    useEffect(() => {
        const getDairy = async () => {
            const data = await getDocs(DairyCollectionRef);
            console.log(data)
            setDairy(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getDairy();
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
                    Dairy.map((Dairy) => {
                        return (
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={Dairy.id}>
                                    <img src={Dairy.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{Dairy.description}</h3>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Price: ${Dairy.price.toFixed(2)}</li>
                                    </ul>
                                    <div className="card-body">
                                        <button className="card-link btn-warning" onClick={()=>{addToCart(Dairy)}}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }</div>
        )
    }
    export default ViewCatalog;