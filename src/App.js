// import React from 'react';
// import './App.css';
//
// const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.
//
//   // Fetch characters from the API in an effect hook. Remember, anytime you have a
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.
//
//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//     </div>
//   );
// }
//
// export default App;
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
const url = 'https://swapi.dev/api/people';
const App = () => {
  const [characters, setCharacters] = useState ([]);
  useEffect (() => {
    axios
      .get (url)
      .then (response => {
        setCharacters (response.data);
        // debugger
      })
      .catch (error => {
        console.log (error);
        // debugger
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} />
    </div>
  );
};
// debugger
export default App;
