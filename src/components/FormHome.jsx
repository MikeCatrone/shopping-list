

import { useState, useEffect } from "react";
import "./FormHome.css";
import FormUpdate from "./FormUpdate";



const FormHome = () => {

    // State for a given item
    let [state, setState] = useState({
        productName: "",
        quantity: "",
        key: 0,
    })



    // Array to hold a list of items
    let dataParse = JSON.parse(localStorage.getItem('theList'));
    let [state2, setState2] = useState( dataParse ? dataParse : [] );



    useEffect(() => {
       localStorage.setItem('theList', JSON.stringify(state2));
       

    }, [state2])


    // When an li is clicked
    const liHandler = (keyID) => {
        
        setState2((prev) => {

            let theCopy = [...prev];

            return theCopy.filter((cur) => cur.key !== keyID);
        })
    }



    return (
        
        <div className="listContainer">
            <h2>Current Shopping List</h2>

            <ul className="ul-container">
              {state2.length !== 0 ? state2.map((cur) => <li onClick={() => liHandler(cur.key)} key={cur.key}>{cur.productName} : {cur.quantity} </li>) : null}   
            </ul>

            <FormUpdate theState={[state, setState, state2, setState2]} />
        </div>
    )
}

export default FormHome;
