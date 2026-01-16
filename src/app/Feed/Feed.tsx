import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import MovieCard from "../MovieCard/MovieCard"
import "../Feed/Feed.css"
import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Feed = ({movies, currentPage, totalResults}: {movies: Array<IMovie>, currentPage: number, totalResults: number}) => {
    if (!movies || movies.length === 0) {
        return ;
    }
    const moviesPerPage = 10;
    
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const nextPage = () => {
        if (currentPage < Math.ceil(totalResults / moviesPerPage)) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div className="container feed">
            {currentMovies.map((movie) => (
                <Link to={"/movie/" + movie.imdbID} key={movie.imdbID}>
                    <MovieCard movie={movie} />
                </Link>
            ))}
            
        </div>
    );
}
export default Feed