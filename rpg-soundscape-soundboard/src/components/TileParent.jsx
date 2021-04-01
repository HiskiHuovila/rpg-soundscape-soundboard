import React from "react";
import Tile from "./Tile"
export default function (props) {
    
    const tiles = ['a','b']
    
    return(
        <div className="tile is-parent is-4 parent-1 is-vertical">
            {tiles.map( (item) => <Tile text={item}></Tile>)}
        </div>
    );
}