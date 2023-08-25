import { useState } from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState('')
    return (
        <div>
            <input type="text" onChange={(event)=>{
                setCity(event.target.value);
            }}/>
            <button onClick={()=>{
                getWeather(city)
            }}>Get</button>
        </div>
    );
}

export default Form;
