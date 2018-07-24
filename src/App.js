import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
    {
        id: 1,
        title: "I Feel Pretty",
        poster: "http://filmphoria.com/wp-content/uploads/2018/04/IFP_Poster_600.jpg"
    },
    {
        id: 2,
        title:"Full Metal Jacket",
        poster:"https://i.pinimg.com/originals/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg"
    },
    {
        id: 3,
        title: "Oldboy",
        poster:"https://upload.wikimedia.org/wikipedia/fi/e/ea/Oldboy_movie.jpg"
    },
    {
        id: 4,
        title: "Star Wars",
        poster:"http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
    },

]

class App extends Component {

    state = {
        greeting: 'Hello !'
    }
    render() {
        return (
            <div className="App">
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index} />
                })}
            </div>
        );
    }
}

export default App;
