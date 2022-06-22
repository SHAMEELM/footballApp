
import { useNavigate  } from 'react-router-dom';

import '../styles/Tournaments.css'

const Leagues = (props) => {

  const navigate = useNavigate();

    const onOpenLeague = (data) => {
      
        navigate('/league-detail', { state: { id:data.id, name:data.name }}, { replace: true });
        
    }


  return (
    <div className='leagues-container'>
      {
      props.data.map((data)=>(
        <div key={data.id} className="league-div" onClick={()=>onOpenLeague((data))}>
          <img src={data.logos.light}/>
          <h1>{data.name}</h1>

        </div>
      ))}

    </div>
  )
}

export default Leagues