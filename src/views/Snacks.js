import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";


function ViewCatalog() {
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
    const { user, logout } = useUserAuth

    return (

        <div>
            {
                Snacks.map((Snack) => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <div key="{snack.id}">
                                <img src={Snack.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Description: {Snack.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${Snack.price.toFixed(2)}</li>
                                </ul>
                                <div className="card-body">
                                    <a href="/" className="card-link">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }</div>
    )
}
export default ViewCatalog;