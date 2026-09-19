import React, {useState} from "react";

function ArrayUpdate() {

    const [car, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars(c => [...c,     newCar]);
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }


    return(
        <div>
            <h2 className="display">List of Car Objects</h2>
            <ul className="displayCars">
                {car.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            
            <input className="inputValues" type="number" value={carYear}
                                        onChange={handleYearChange}/> <br/>
            <input className="inputValues" type="text" value={carMake}
                                        onChange={handleMakeChange}/> <br/>
            <input className="inputValues" type="text" value={carModel}
                                        onChange={handleModelChange}/> <br/>
            
            <button onClick={handleAddCar} className="add">Add Car</button>


        </div>);
}

export default ArrayUpdate