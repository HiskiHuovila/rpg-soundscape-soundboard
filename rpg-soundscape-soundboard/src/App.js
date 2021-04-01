import logo from './logo.svg';
import './App.css';
import TabParent from './components/TabParent';
import ButtonsContainer from './components/ButtonsContainer';
import TileAncestor from './components/TileAncestor';
import { useState } from 'react';
import ButtonsAncestor from './components/ButtonsAncestor';

function App() {
  
  const all = 
  {
    Civilized:{ Town:[], City:[], Military:[], Inn:[],Port:[] }, 
    Wilderness:{Forest:[], Grasslands:[], Desert:[], Riverside:[],Mountains:[],Jungle:[],Glacier:[],Volcano:[],Underground:[]
  },
    Weather:{ Rain:[], Thunderstorm: [], Windy: []},
    Dungeon:{ Cave:[], Built:[]}
  };

  //for tabs and buttons to set active
  const [activeTree, setActiveTree] = useState([Object.keys(all)[0],Object.keys(all[Object.keys(all)[0]])[0]])

  const setActiveTab = (tab) => {
    console.log(tab)
    setActiveTree([tab, Object.keys(all[tab])[0]])
  }

  const setActiveButton = (button) => {
    console.log(button)
    setActiveTree([activeTree[0], button])
  }


  return (
  <div className="app">
    <div className="tabs is-centered is-boxed is-medium">
      <TabParent all={all} active={activeTree} setActiveTab={setActiveTab}></TabParent>
    </div>
      <ButtonsAncestor all={all} active={activeTree} setActiveButton={setActiveButton}></ButtonsAncestor>
     <div className="container is-centered">
        <TileAncestor all={all}></TileAncestor>
      </div>
  </div>
  );
}

export default App;