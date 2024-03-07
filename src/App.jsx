import './App.scss'
import jokesData from './db/data.json'
import Joke from './components/Joke'

function App() {
  console.log(jokesData)
  return (
    <div className='app'>
      {
        // filtering the jokes with rating > 3
        jokesData && jokesData.filter((joke) => joke.rating < 3).map((joke, index) =>
          <Joke jokeObj={joke} key={index} />
        )




        // jokesData && jokesData.map((joke) =>
        //   <Joke jokeObj={joke} key={joke.id} />
        // )
      }
    </div>
  )
}

export default App
