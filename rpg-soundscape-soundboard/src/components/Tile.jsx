import React from "react";

export default function (props) {

    const htmlString = props.text

    let musicBg = "#2A0A12"
    if(props.music) musicBg = "#0A1B2A"

    return(
        <div className="is-centered is-child box" key={props.text} style={{backgroundColor: musicBg, margin:'5px', position: 'relative'}}>
            <div className="pinTileButton" onClick={() => {props.pinFunction(htmlString, props.music); props.forceSidebarOpen()}}></div>
            <div dangerouslySetInnerHTML={{ __html: htmlString, }}/>
        </div>
    );
}