import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardDetails from './components/CardDetails';

function App() {

  const [Cards, setCads] = useState([
    {
      "imdbID": "tt0468569",
      "Title": "The Dark Knight",
      "Year": "2008",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": true
    },
    {
      "imdbID": "tt2975590",
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": true
    },
    {
      "imdbID": "tt1345836",
      "Title": "The Dark Knight Rises",
      "Year": "2012",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": false
    },
    {
      "imdbID": "tt0468569",
      "Title": "The Dark Knight",
      "Year": "2008",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": true
    },
    {
      "imdbID": "tt2975590",
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": false
    },
    {
      "imdbID": "tt1345836",
      "Title": "The Dark Knight Rises",
      "Year": "2012",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": true
    },
    {
      "imdbID": "tt0468569",
      "Title": "The Dark Knight",
      "Year": "2008",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": false
    },
    {
      "imdbID": "tt2975590",
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "isFav": false
    },
  ])

  const [selectedCard, setSelectedCard] = useState()
  const [filter, setFilter] = useState("")

  return (
    <div className="App">

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="favorite">favorite</option>
      </select>

      <div className='main'>
        {filter === "favorite" ?

          Cards.filter(x => x.isFav === true).map((data) => {
            return (
              <Card
                data={data}
                setSelectedCard={setSelectedCard}
                Cards={Cards}
                setCads={setCads}
                
              />
            )
          })

          :

          Cards.map((data) => {
            return (
              <Card
                data={data}
                setSelectedCard={setSelectedCard}
                Cards={Cards}
                setCads={setCads}
              />
            )
          })
        }

      </div>
      {selectedCard && (
        <CardDetails>
          {selectedCard}
        </CardDetails>
      )}
    </div>
  );
}



export default App;
