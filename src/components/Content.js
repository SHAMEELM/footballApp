import React,{useState,useEffect} from 'react'

import axios from 'axios'

import '../styles/Tournaments.css'
import Standings from './Standings'
import Leagues from './Leagues'



const Content = () => {

  const [active,setActive] = useState(true)

  const [data, setData] = useState([])
  
  useEffect(()=>{

    axios.get('https://api-football-standings.azharimm.site/leagues')
    .then(res => {
        console.log(res.data)
        setData(res.data.data)
    })
  },[])

  return (
    <div className='content-container'>
      <div className='tabs'>
        <div className='tab-leagues' onClick={() => setActive(true)}>
          <h1 style={{color: active ? '#c20114' : null}}>Leagues</h1>
        </div>
        <div className='tab-standings' onClick={() => setActive(false)}>
          <h1 style={{color: !active ? '#c20114' : null}}>Standings</h1>
        </div>

      </div>

      {active ? <Leagues data={data}/> : <Standings  data={data}/>}

    </div>
  )
}

export default Content;