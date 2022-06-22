import React ,{useEffect} from 'react'

import { useLocation } from 'react-router-dom'
import axios from 'axios';


const LeagueDetails = (props) => {

  useEffect(() => {

    const leagueId = location.state.id
    
    axios.get(` https://api-football-standings.azharimm.site/leagues/${leagueId}`)
    .then(res => {
        console.log("details",res);
    })
  
    
  }, [])
  


    const location = useLocation();

    console.log("params",location.state)

  return (
    <div>LeagueDetails</div>
  )
}

export default LeagueDetails