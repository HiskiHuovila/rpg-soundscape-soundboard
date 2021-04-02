import React from 'react'
import Button from './Button'
export default function (props) {

    const buttons = Object.keys(props.all)
    return(
        <div className="buttons container has-addons is-centered">
            {buttons.map( (item) => {return <Button text={item} active={props.active[1] === item} setActiveButton={props.setActiveButton} key={item}></Button> })}
        </div>
    );
}