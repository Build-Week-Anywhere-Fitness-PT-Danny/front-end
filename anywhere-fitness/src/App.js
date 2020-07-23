import React, {useState} from 'react';
import './App.css';
import SignUp from './Components/Register/SignUp'

function App() {
  const [team,setTeam] = useState([]);

  return (
    <div className="App">
      <p>Anywhere Fitness React App</p>
      <SignUp team={team} setTeam={setTeam}/>
    </div>
  );
}

export default App;
