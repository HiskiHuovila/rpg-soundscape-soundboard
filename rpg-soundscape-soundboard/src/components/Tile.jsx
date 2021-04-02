import React from "react";

export default function (props) {

    const htmlString = props.text
    return(
        <div className="is-centered is-child box" key={props.text}>
            <div dangerouslySetInnerHTML={{ __html: htmlString, }}/>
            </div>
    );
}