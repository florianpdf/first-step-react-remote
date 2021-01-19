import Nav from './components/Nav'
import Card from './components/Card'

import persons from './data/data'
import './App.css'


function App() {
  
  return (
    <div className="App">
      <div className='nav'>
        <Nav />
      </div>
      <div className='cards'>
        { persons.map(person => <Card name={person.name} lastName={person.lastName} city={person.city} age={person.age} />) }
      </div>
    </div>
  );
}

export default App;
