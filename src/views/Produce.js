import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";


function ViewCatalog() {
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
    const { user, logout } = useUserAuth

    return (

        <div>
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