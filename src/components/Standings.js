import React,{useState,useEffect} from 'react'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles  } from 'react-loader-spinner';
import axios from 'axios';

const Standings = (props) => {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedLeague,setSelectedLeague] = useState('eng.1')
  const [selectedYear,setSelectedYear] = useState('2021')

  useEffect(() => {
    setLoading(true)

    axios.get(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`)
    .then(res=>{
      console.log("result",res.data.data.standings);
      setData(res.data.data.standings)
    })
    .catch(error => console.log(error))
    .finally(()=>setLoading(false))
    
  }, [selectedYear,selectedLeague])
  

  return (
    <div className='standings-container'>
      <div className='select-container'>
        <select
          name='select-league'
          id='select-league'
          defaultValue={selectedLeague}
          onChange={(e) => {setSelectedLeague(e.target.value)}}
        >
          {
            props.data.map(league => {
              return <option key={league.id} value={league.id}>{league.name}</option>
              
            })

          }

        </select>

        <select
          name='select-year'
          id='select-year'
          defaultValue={selectedYear}
          onChange={(e) => {setSelectedYear(e.target.value)}}
        >
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>


        </select>

      </div>

      <div className='standing-result'>
        {
        loading ? <Circles  color="#00BFFF" height={180} width={180}/> : 

          data.map((data,index) => (
          <div key={data.team.id} className="standing-info-div">
            <h1 style={{color:'#c20114'}}>
              <span>
                {`${index + 1}.`}
                <img 
                  src={data.team.logos[0].href} 
                  alt="#"
                  style={{width:'30px'}} 
                />
              </span>
              {data.team.shortDisplayName}
            </h1>
          </div>
        ))
        
        }
      </div>
        
    </div>
  )
}

export default Standings