import React from "react"
import { useState } from "react"
export default function Change()
{
    const[name,setName]=useState("Guest")
    function handlechange()
    {
        setName("Adam")
    }
    return (
        <div>
            <h1>Welcome {name} </h1>
            <button onClick={handlechange}>Change</button>
        </div>
    )
}