import './App.css';
import TabParent from './components/TabParent';
import TileAncestor from './components/TileAncestor';
import { useState } from 'react';
import ButtonsAncestor from './components/ButtonsAncestor';
import Footer from './components/Footer'
import Instructions from './components/Instructions';
import Sidebar from './components/Sidebar';

/*
const csvFetch = async (path) => {
  return new Promise(resolve => {
    Papa.parse(path, {
    download: true,
    header: true,
    complete: results => {
      resolve(results.data);
    }
    })
  })
}

const fetchData = async () => {
  return await csvFetch(data.default); 
}
*/
let all = 
  {/*
    Civilized:{ Town:{}, City:[], Military:[], Inn:[],Port:[] }, 
    Wilderness:{Forest:[], Grasslands:[], Desert:[], Riverside:[],Mountains:[],Jungle:[],Glacier:[],Volcano:[],Underground:[]},
    Weather:{ Rain:[], Thunderstorm: [], Windy: []},
    Dungeon:{ Cave:[], Built:[]}
    */
  };

function App(props) {

  console.log(props.data)

  all = props.data
  //for tabs and buttons to set active
  const [activeTree, setActiveTree] = useState([Object.keys(all)[0],Object.keys(all[Object.keys(all)[0]])[0]])
  const firstInAll = all[Object.keys(all)[0]][Object.keys(all[Object.keys(all)[0]])[0]][0]
  const [pinned, setPinned] = useState([firstInAll.source,firstInAll.music === "TRUE"]);
  const [sidebarOpen, setSidebarStatus] = useState(false);



  const setActiveTab = (tab) => {
    setActiveTree([tab, Object.keys(all[tab])[0]])
  }

  const setActiveButton = (button) => {
    setActiveTree([activeTree[0], button])
  }

  const pinTile = (input,music) => {
    setPinned([input,music]);
  }

  const sidebarStatus = () => {
    setSidebarStatus(!sidebarOpen)
}

  const forceSidebarOpen = () => {
    setSidebarStatus(true)
  }

  return (
  <div className="app is-tall">    
       <div className="container is-centered level section">
      <Instructions />
    </div>
    <section>
      <div className="tabs is-centered is-boxed is-medium">
        <TabParent all={all} active={activeTree} setActiveTab={setActiveTab}></TabParent>
      </div>
      <div className="container is-centered level">
        <ButtonsAncestor all={all} active={activeTree} setActiveButton={setActiveButton}></ButtonsAncestor>
      </div>
    </section>
     <div className="tile-container hero is-small">
        <TileAncestor all={all} active={activeTree} pinFunction={pinTile} forceSidebarOpen={forceSidebarOpen}></TileAncestor>
      </div>
      <Footer/>
      <Sidebar pinned={pinned} sidebarStatus={sidebarStatus} sidebarOpen={sidebarOpen}/>
  </div>
  
  );
}

export default App;
