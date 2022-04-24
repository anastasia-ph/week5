import './App.css';
import jsonText from './superheroes.json' 
import Card from './components/Card';
import CardContainer from './components/CardsContainer';
import React from 'react';
function App() {
  return (
    <React.Fragment>
    <CardContainer>
        {
            jsonText.map((json) => <Card picture={json.picture}
            name={json.name}
            alterego={json.alterego}
            profession={json.profession}
            friends={json.friends}
            powers={json.powers}
            bio={json.bio}/>)
        }
    </CardContainer>
    </React.Fragment>
  );
}

export default App;
