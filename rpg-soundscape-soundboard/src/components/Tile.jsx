import React from "react";

export default function (props) {
    return(
        <div className="tile is-centered notification ${color} displayindex-${index} songlink is-child box">{props.text}</div>
    );
}