import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "I Feel Pretty",
   "Full Metal Jacket",
   "Oldboy",
   "Star Wars"
]

const movieImages = [
    "http://filmphoria.com/wp-content/uploads/2018/04/IFP_Poster_600.jpg",
    "https://i.pinimg.com/originals/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg",
    "https://upload.wikimedia.org/wikipedia/fi/e/ea/Oldboy_movie.jpg",
    "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
