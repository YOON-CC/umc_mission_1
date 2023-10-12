import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../style/MovieList.css';
import { movies } from "../data/movieApi";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        setMovieData(movies.results);
    }, []);

    console.log(movieData)

    return (
        <div className='container'>
            {movieData.map((movie) => (
                <div className='listObject' key={movie.id}>
                    <div className='imgContainer'>
                        <img className='mainImage' src={movie.poster_path}></img>
                    </div>
                    <div className='infoContainer'>
                        <div className='title'>{movie.title}</div>  
                        <div className='review'>{movie.vote_average}</div>       
                    </div>
                    <MovieDetail title={movie.title} overview={movie.overview} />
                </div>
            ))}
            <div className="containerFooter"></div>
        </div>
    
    );
};

export default MovieList;