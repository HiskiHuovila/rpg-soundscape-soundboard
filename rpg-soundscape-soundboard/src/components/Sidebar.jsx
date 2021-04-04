import React from 'react'
import { useState } from 'react';
import Tile from './Tile'
import arrowWhite from "../icons/arrow_forward_ios_white_24dp.svg"
function Sidebar (props){

    const [sidebarOpen, setSidebarStatus] = useState(false);

    let sideBarleft = '0px';
    if(sidebarOpen) 
        sideBarleft = '-320px'

    const sidebarStyle = {
        position: 'fixed',
        left: sideBarleft,
        top: '0',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10',
        pointerEvents: 'none'
    }
    
    let musicBg = "#2A0A12"
    if(props.pinned[1]) musicBg = "#0A1B2A"

    const tileStyle  ={
        position: 'relative',
        zIndex: '100',
        pointerEvents: 'all',
        backgroundColor: musicBg 
    }

    let arrowRotation = 'rotate(180deg)'
    if(sidebarOpen) arrowRotation = 'rotate(0deg)'

    const buttonStyle = {
        zIndex: '100',
        backgroundColor: 'gray', 
        pointerEvents:'all',
        backgroundImage: 'url('+arrowWhite+')',
        height: '50px',
        width: '25px',
        borderRadius: '5px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        transform: arrowRotation,
        cursor: 'pointer'
    }

    const sidebarStatus = () => {
        setSidebarStatus(!sidebarOpen)
        console.log(sidebarOpen)
    }
        


    return(
        <aside style={sidebarStyle}>
            <div className={"tile is-parent"} style={tileStyle}>
             <div className={"tile"} dangerouslySetInnerHTML={{ __html: props.pinned[0], }} style={tileStyle}/>
            </div>
            <div onClick={sidebarStatus} style={buttonStyle}></div>
        </aside>

    );
}
export default Sidebar