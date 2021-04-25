import React from "react"
import Tab from "./Tab"
function TabParent(props) {
    
    const tabs = Object.keys(props.all)
    return(
       <ul className="tabParent level-item">
           {tabs.map( (item) => {return <Tab text={item} active={props.active[0] === item} setActiveTab={props.setActiveTab} key={item}></Tab>})}
       </ul>
    );
}
export default TabParent;