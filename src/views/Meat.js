import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";


function ViewCatalog() {
    const [Meats, setMeats] = useState([]);
    const MeatsCollectionRef = collection(db, "Meats")
    useEffect(() => {
        const getMeats = async () => {
            const data = await getDocs(MeatsCollectionRef);
            console.log(data)
            setMeats(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getMeats();
    }, []);
    const { user, logout } = useUserAuth

    return (

        <div>
            {
                Meats.map((Meat) => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <div key="{Meat.id}">
                                <img src={Meat.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">{Meat.description}</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${Meat.price.toFixed(2)}</li>
                                </ul>
                                <div className="card-body">
                                <button className="card-link btn-warning">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }</div>
    )
}
export default ViewCatalog;