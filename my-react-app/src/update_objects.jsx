
import React, {useState} from "react";

function MyObjectComponent() {

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    function handleYearChange(event) {

        setCar(c => ({...car,year: event.target.value}));

    }

    function handleMakeChange(event) {
        
        setCar(c => ({...car,make: event.target.value}));
        
    }

    function handleModelChange(event) {

        setCar(c => ({...car,madel: event.target.value}));
        
    }
    
    return(
        <div>
            <p className="display">Your favourite car: {car.year} {car.make} {car.model}</p>
            <input className="inputValues" type="number" value={car.year}
                                        onChange={handleYearChange}/> <br/>
            <input className="inputValues" type="text" value={car.make}
                                        onChange={handleMakeChange}/> <br/>
            <input className="inputValues" type="text" value={car.model}
                                        onChange={handleModelChange}/> <br/>


        </div>);

}

export default MyObjectComponent