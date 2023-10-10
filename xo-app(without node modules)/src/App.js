import './App.css'
import React,{useState} from 'react';
import Playerdatabox from './components/Game/Playerdatabox';
import Form from './components/Inputcollecter/Form';
import Gameheader from './components/Game-Header/Gameheader';
import Head from "./components/Ui/Head";

let selectedBox
function App() {
  const [playerData,setplayerData] = useState('')
  const [dataCollection,setDataCollection] = useState('')
  const [display,setDisplay] = useState('')
  function dataCollector(data) {
     setDataCollection({...data})
     setDisplay('none')
  }

  function playerDataCollector(data) {
      setplayerData({...data})
      console.log(playerData)
  }

  function boxOpener(event) {
    selectedBox = event.target.dataset.playerid
    setDisplay('block')
  }

  function clickOpener(collector) {
    setDisplay(collector)
  }

  return (
      <Head>
      <Form display={display} dataCollector={dataCollector} selectedBox={selectedBox} cickOpener={clickOpener}></Form>
      <Playerdatabox formOpener={boxOpener} data={dataCollection} playerDataCollector={playerDataCollector}></Playerdatabox>
      </Head>
)}

export default App;
