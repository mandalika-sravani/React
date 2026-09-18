// onChange -- event handler used primarily with form-elements
//              ex. <input>, <textarea>, <select>, <radio>
//              Triggers a function every time the value of the input changes

import React, {useState} from "react";

function Mycomponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange (event) {
        setName(event.target.value);
    }

    function handleQuantityChange (event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange (event) {
        setComment(event.target.value);
    }

    function handlePayment (event) {
        setPayment(event.target.value);
    }

    function handleShipping (event) {
        setShipping(event.target.value);
    }
    
    return (<div>
        <input value={name} className="inputValues" onChange={handleNameChange} />
        <p className="display">Name: {name}</p>

        <input value={quantity} className="inputValues" 
                    type="number" onChange={handleQuantityChange}/>
        <p className="display">Quantity: {quantity}</p>

        <textarea value={comment} className="inputValues" 
                placeholder="Enter Delivery Instructions" onChange={handleCommentChange}/>
        <p className="display">Comment: {comment}</p>

        <select value={payment} onChange={handlePayment} className="inputValues">
            <option value="">Select an option</option>
            <option value="Visa">VISA</option>
            <option value="Mastercard">MASTERCARD</option>
            <option value="Giftcard">GIFT CARD</option>
        </select>
        <p className="display">Payment: {payment}</p>

        <label className="radioValues">
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                        onChange={handleShipping} />
            Pick Up
        </label><br></br>
        <label className="radioValues">
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                        onChange={handleShipping} />
            Delivery</label>
        <p className="display">Shipping: {shipping}</p> 
    </div>);
}

export default Mycomponent