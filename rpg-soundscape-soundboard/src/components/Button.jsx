import React from "react";

 function Button(props) {
    
    let active = ""
    if(props.active) active = "is-selected is-dark"

    return(
        <div className={"button " + active} onClick={() => props.setActiveButton(props.text)} key={props.text}>{props.text}</div>
    );
}
export default Button;