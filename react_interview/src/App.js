import './App.css';
import Headers from './components/Headers';
import Card from './components/Card';
import movies from './movie.json';

function App() {
  return (
    <div className="App">
      <Headers/>
      <div className='main'>
      {movies.map((element)=> {
        return(
          <Card 
          title={element.Title}
          year={element.Year}
          img={element.Poster}
          />
        )
      })

      }
        <Card/>
      </div>
    </div>
    );
    }
     
  

export default App;
