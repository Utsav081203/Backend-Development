import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);
  // reponse automatically parses into json.

  return (
    <>
      <h1>Here are {jokes.length} Jokes:</h1>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
      {/* we can access index too */}
      {/* applying key for optimization */}
      {/* uniqueness */}
    </>
  )
}

export default App
