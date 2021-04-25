import React from "react";
import Tile from "./Tile"

function TileAncestor(props) {
    const tab = props.all[props.active[0]];
    const button = tab[props.active[1]]
    return(
        <div className={"tile is-ancestor hero-body"}>
            <div className="tile is-parent" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
            {button.map( (item) => <Tile text={item.source} key={item.source} music={item.music === "TRUE"} pinFunction={props.pinFunction} forceSidebarOpen={props.forceSidebarOpen}></Tile>)}
        </div>
        </div>
    );
}
export default TileAncestor;