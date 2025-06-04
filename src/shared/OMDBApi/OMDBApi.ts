import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;
const OMDBApiInstance = axios.create({baseURL: BASE_URL});
const API_KEY = import.meta.env.VITE_API_KEY;

export interface IMovie{
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export interface IMyMovie{
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Production: string
    Rated: string
    //Ratings: Array<IRatings>
    Released: string
    Runtime: string
    Website: string
    Writer: string
    imdbRating: string
    imdbVotes: string
}

interface ISearchMovieRDO{
    Response: string
    TotalResults: string
    CurrentPage: number ///////
    Search: Array<IMovie>
}

const OMDBApi = {
    searchMovie: async(title: string, currentPage?: number) => {
        const res = await OMDBApiInstance.get<ISearchMovieRDO>("", {
          //params: {apikey: API_KEY, s:title} 
          params: {apikey: API_KEY, s:title, currentPage} 
        })
        return res.data;
    },
    getMovieById: async (id: string) => {
        const res = await OMDBApiInstance.get<IMyMovie>("", {
            params: { apikey: API_KEY, i: id }
        });
        console.log(res.data);
        return res.data;
    }
}
export default OMDBApi;