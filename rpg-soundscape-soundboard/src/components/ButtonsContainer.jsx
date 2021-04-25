import React from 'react'
import Button from './Button'
function ButtonsContainer(props) {

    const buttons = Object.keys(props.all)
    return(
        <div className="buttons container has-addons is-centered">
            {buttons.map( (item) => {return <Button text={item} active={props.active[1] === item} setActiveButton={props.setActiveButton} key={item}></Button> })}
        </div>
    );
}
export default ButtonsContainer;