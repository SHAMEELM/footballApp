import { Routes,Route,Link } from 'react-router-dom';

import './App.css';
import MainPage from './components/MainPage';
import Tournaments from './components/Tournaments';
import LeagueDetails from './components/LeagueDetails';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/tournaments" exact element={<Tournaments />} />
        <Route path="/league-detail" exact element={<LeagueDetails />} />

      </Routes>
    </div>
  );
}

export default App;
