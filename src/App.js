import { useState, useEffect } from 'react';
import './App.css';
import Movie from './Components/Movie';
import Search from './Components/Search';
import NoResult from './Components/NoResult';
import Header from './Components/Header';

function App() {

  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [found, setFound]=useState("True");

  useEffect(() => {
    DefaultMovies()
  },[])

  const DefaultMovies = () =>{
    fetch(`http://www.omdbapi.com/?apikey=e8c5f6dd&s=superman`)
      .then(response => response.json())
      .then(data => { 
        if(data.Response==="False")
          setFound(data.Response)
        else{
          setFound("True");
          setMovieList(data.Search);
        }
      })
      .catch(err => console.log(err.message));
  }

  const getMovies = (movie) => {

    fetch(`http://www.omdbapi.com/?apikey=e8c5f6dd&s=${movie}`)
      .then(response => response.json())
      .then(data => { 
        if(data.Response==="False")
          setFound(data.Response)
        else{
          setFound("True");
          setMovieList(data.Search);
        }
      })
      .catch(err => console.log(err.message));
  }

  const setMovie = (e) => {
    setMovieName(e.target.value);
  }

  const getMovieList = (e) => {
    if(e.key==='Enter'){
      getMovies(movieName);
    }
  }

  return (
    <>
      <div className='main_container'>
      <div className="container my-3">
        <Search value={movieName} onChange={setMovie} onKeyPress={getMovieList}/><br/>
        <Header heading="Show your favorite movies"/>
        <div className='movie_list container'>
          {
            (found==="False")?(<NoResult image={"../icon.jpg"}/>):movieList?.map((value, index) => (
              <Movie prop={value} key={index} />
            ))
          }
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
