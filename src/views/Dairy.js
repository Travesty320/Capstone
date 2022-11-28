import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";


function ViewCatalog() {
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
    const { user, logout } = useUserAuth

    return (

        <div>
            {
                Dairy.map((Dairy) => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <div key="{Dairy.id}">
                                <img src={Dairy.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Description: {Dairy.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${Dairy.price.toFixed(2)}</li>
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