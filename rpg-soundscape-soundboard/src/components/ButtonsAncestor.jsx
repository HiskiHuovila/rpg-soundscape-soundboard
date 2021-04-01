import React from "react";
import ButtonsContainer from "./ButtonsContainer";

export default function (props) {

    const containers = Object.keys(props.all)


    return(
        <div className="container is-centered buttons-ancestor">
            {containers.filter( (item) => item === props.active[0]).map( (item) => <ButtonsContainer all={props.all[item]} active={props.active} setActiveButton={props.setActiveButton}></ButtonsContainer>)}
        </div>
    );
}