import React, { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
const SpeedoMeter = () => {
    const [speed, setSpeed] = useState(40);
    const handleInputChange = (event) => {
        console.log(event.target.value)
        let inputSpeed = event.target.value
        if(inputSpeed>180|| inputSpeed<0){
            alert("Speed should be between 0 to 180")
        }
        else{
            setSpeed(inputSpeed)
        }
    }
    
    return (
        <div>
        <ReactSpeedometer
            maxValue={180}
            value={speed}
            needleColor="black"
            startColor="green"
            segments={10}
            endColor="red"
            textColor="black"
            height={200}
        />
       <label>Speed: 
        <input  onChange={handleInputChange} type="number" value={speed}></input>
        </label>
        </div>
    )

}

export default SpeedoMeter;