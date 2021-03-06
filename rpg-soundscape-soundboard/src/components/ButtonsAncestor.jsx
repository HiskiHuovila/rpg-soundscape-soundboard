import React from "react";
import ButtonsContainer from "./ButtonsContainer";

function ButtonsAncestor(props) {

    const containers = Object.keys(props.all)
    
    return(
        <div className="container is-centered buttons-ancestor level-item">
            {containers.filter( (item) => item === props.active[0]).map( (item) => <ButtonsContainer all={props.all[item]} active={props.active} setActiveButton={props.setActiveButton} key={item}></ButtonsContainer>)}
        </div>
    );
}
export default ButtonsAncestor;