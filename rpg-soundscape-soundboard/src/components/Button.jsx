import React from "react";

export default function (props) {
    
    let active = ""
    if(props.active) active = "is-selected is-dark"

    return(
        <a className={"button " + active} onClick={() => props.setActiveButton(props.text)} key={props.text}>{props.text}</a>
    );
}