
import "./FormUpdate.css";


const FormUpdate = ({theState}) => {
   
    const changeHandler = (eve) => {
        
        // setState() for input text values
        theState[1]((prev) => {

           prev[eve.target.name] = eve.target.value;
           
            return {...prev}
        })
    }


    const buttonHandle = () => {

        // adds a simple key value to an item
        theState[1]((prev) => {

            let copy = {...prev};
            copy.key++;

            return copy;
        })
        

        // adds an item to an array of items
        theState[3]((prev) => {

            let copy = [...prev];
            copy.push(theState[0]);

            return copy;
        })

        
        // resets the inputs on every button click
        theState[1]((prev) => {

            return {...prev, productName: "", quantity: ""};
        })
    }



    return (

        <div className="formUpdate">

            <span className="theInputs">

                <span class="nameInput">
                    <label className="prodLabel" htmlFor="theProduct">Product</label>
                    <input className="product" onChange={changeHandler} type="text" placeholder='Enter Product' id="theProduct" name="productName" value={theState[0].productName}></input>
                </span>

                <span className="quantInput">
                    <label className="quantity" htmlFor="theQuantity">Quantity </label>
                    <input onChange={changeHandler}  type="number" placeholder='Enter Quantity' id="theQuantity" name="quantity" value={theState[0].quantity}></input>
                </span>
                
            </span>

            <button onClick={buttonHandle} className="addButton">Add Item</button>

        </div>
    )
   
}

export default FormUpdate;
