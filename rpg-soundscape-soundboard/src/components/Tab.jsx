import React from "react"

export default function (props) {
   let active = ""

   if(props.active) active = "is-active"

    return(
        <li className={"tab " +  active} key={props.text}>
            <a onClick={ () => props.setActiveTab(props.text)}>
                <span>
                    {props.text}
                </span>
            </a>
        </li>
    );

}