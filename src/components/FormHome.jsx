

import { useState } from "react";
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
    let [state2, setState2] = useState([]);



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

            <ul class="ul-container">
              {state2.length !== 0 ? state2.map((cur) => <li onClick={() => liHandler(cur.key)} key={cur.key}>{cur.productName} : {cur.quantity} </li>) : null}   
            </ul>

            <FormUpdate theState={[state, setState, state2, setState2]} />
        </div>
    )
}

export default FormHome;
