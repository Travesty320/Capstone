import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
import { getDatabase, ref, set, child, get  } from "firebase/database";

function ViewCatalog() {
    const { user, cart, setCart } = useUserAuth();
    const [Produce, setProduce] = useState([]);

    const ProduceCollectionRef = collection(db, "Produce")
    useEffect(() => {
        const getProduce = async () => {
            const data = await getDocs(ProduceCollectionRef);
            console.log(data)
            setProduce(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getProduce();
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
                Produce.map((Produce) => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <div key="{Produce.id}">
                                <img src={Produce.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">{Produce.description}</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${Produce.price.toFixed(2)}</li>
                                </ul>
                                <div className="card-body">
                                        <button className="card-link btn-warning" onClick={()=>{addToCart(Produce)}}>Add to Cart</button>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }</div>
    )
}
export default ViewCatalog;