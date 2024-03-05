import React from "react";

function Props1(props)
{
    const{name,age}=props
    return(
        <div>
            <h1>Hello {name} With Age {age}</h1>
            <h1>{props.children}</h1>
        </div>
    )
}
export default Props1
