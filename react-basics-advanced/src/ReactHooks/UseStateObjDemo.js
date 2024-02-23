import React, {useState} from "react";

const UseStateObjDemo = () => {
    const [car,setCar] = useState({
        "name":"mustang",
        "color":"red"
    });
    const updateCarColor = () => {
        console.log("Update")
        setCar(prevData=> {
           return{ ...prevData,
            "color":"pink"}
        });
    }
    return(
        <div>
            <button id="update_car" name="update_car"
            onClick={()=>updateCarColor()}>Update Color</button>
            <h1>My {car.name}</h1>
      <p>
        It is a {car.color}.
      </p>
        </div>
    )
}
export default UseStateObjDemo;