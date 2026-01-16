import { create } from "zustand";
import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import { persist } from "zustand/middleware";

interface MovieState {
    movies: Array<IMovie & { liked?: boolean }>
    addLike: (movie: IMovie) => void
}

export const useMovieStore = create<MovieState>()(persist(
    (set, get) => ({
        movies: [],
        addLike: (movie: IMovie) => {
            set((state) => {
                const existingMovieIndex = state.movies.findIndex(m => m.imdbID === movie.imdbID);

                if (existingMovieIndex !== -1) {
                    const updatedMovies = [...state.movies];
                    updatedMovies[existingMovieIndex] = {
                        ...updatedMovies[existingMovieIndex],
                        liked: !updatedMovies[existingMovieIndex].liked
                    };
                    return { ...state, movies: updatedMovies };
                } else {
                    return { 
                        ...state, 
                        movies: [...state.movies, { ...movie, liked: true }] 
                    };
                }
            });
        },
    }),
    { name: 'likes-storage' } 
));
