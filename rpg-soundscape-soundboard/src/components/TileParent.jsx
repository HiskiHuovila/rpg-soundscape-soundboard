import React from "react";
import Tile from "./Tile"
export default function (props) {
    
    const tab = props.all[props.active[0]];
    const button = tab[props.active[1]]
    console.log(button)
    const tiles = ['a','b']
    return(
        <div className="tile is-parent" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
            {button.map( (item) => <Tile text={item.source} key={item.source} music={item.music === "TRUE"}></Tile>)}
        </div>
    );
}