import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import { useMovieStore } from "../../entities/MovieStore/Movie.store";
import Feed from "../../app/Feed/Feed";
import "./LikedMovies.css";
import { useState } from "react";

export default function LikedMovies(){
    const { movies, addLike } = useMovieStore((store)=>store);
    console.log(movies);

    const [currentPage, setCurrentPage] = useState(1);
    const totalResults = movies.length;
    
    return <div className="likedcontainer"><h2 style={{ color: 'red' }}>Favorites</h2><Feed movies={movies} currentPage={currentPage} totalResults={totalResults}/></div>
}
