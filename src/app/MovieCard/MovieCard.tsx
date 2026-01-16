import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import "../MovieCard/MovieCard.css";
import { useMovieStore } from "../../entities/MovieStore/Movie.store";

const MovieCard = ({movie}: {movie: IMovie}) => {
    const { movies, addLike } = useMovieStore((store)=>store);
    //const { likes, liked } = movies[movie.imdbID] || { likes: 0, liked: false };

    const isLiked = movies.some((likedMovie) => 
        likedMovie.imdbID === movie?.imdbID && likedMovie.liked === true
      );

    const handleLikeToggle = () => {
        addLike(movie);
        console.log('Clicked movie:', movie);
    };

    return <div className="container">
        <div className="poster" style={{backgroundImage: `url(${movie.Poster})`}}></div>
            <div className="shortdescription" >
                <h3 style={{ color: 'red' }}>
                <span className={`${isLiked ? 'liked' : 'like'}`} onClick={handleLikeToggle} >&#10084;</span>
                {movie.Title}
                </h3>
                <p>{movie.Type}, {movie.Year}</p>
                <p>ID: {movie.imdbID}</p>
            </div>
    </div>
}
export default MovieCard