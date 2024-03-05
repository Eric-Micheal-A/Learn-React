import React from "react";
import { useState } from "react";
export default function Counter()
{
    const[count,setc]=useState(0)
    function Increament()
    {
        if(count < 10)
        setc(prev=>prev+1)
    }
    function Decreament()
    {
        if(count > 0)
        setc(prev=>prev-1)
    }
    function Reset()
    {
        setc(0)
    }
    return(
        <div>
            <h1>Count is {count}</h1>
            <button onClick={Increament}>Increament</button>
            <button onClick={Decreament}>Decreament</button>
            <button onClick={Reset}>Reset</button>
        
        </div>
    )
}