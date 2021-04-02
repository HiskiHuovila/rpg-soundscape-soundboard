import React from "react";
import TileParent from "./TileParent"

export default function (props) {
    return(
        <div className={"tile is-ancestor hero-body"}>
            <TileParent all={props.all} active={props.active} ></TileParent>
        </div>
    );
}