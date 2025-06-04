import { useEffect, useState } from "react";
import OMDBApi, { IMyMovie } from "../../shared/OMDBApi/OMDBApi";
import { useParams } from "react-router";
import "../Movie/Movie.css";
import { useMovieStore } from "../../entities/MovieStore/Movie.store";

export default function Movie() {
  let { movie } = useParams();
  let [myMovie, setMyMovie] = useState<IMyMovie | undefined>(undefined);
  let [activeTab, setActiveTab] = useState<'plot' | 'more'>('plot'); // Состояние для активной вкладки
  const { movies, addLike } = useMovieStore((store)=>store);

  const isLiked = movies.some((likedMovie) => 
    likedMovie.imdbID === myMovie?.imdbID && likedMovie.liked
  );

   useEffect(() => {
     const fetch = async () => {
      movie && setMyMovie(await OMDBApi.getMovieById(movie))
    };
    fetch();
  }, []);

  const toggleTabs = (tab: 'plot' | 'more') => {
    setActiveTab(tab); // Устанавливаем активную вкладку
  };

  const handleLikeToggle = () => {
    if (myMovie?.imdbID){addLike(myMovie)};
  };

  return (
    <div className="movie">
        {myMovie && (
            <>
              <div className="myPoster" style={{backgroundImage: `url(${myMovie.Poster})`}}></div>
                <div>
            
                  <div>
                    <h1 >
                      <span className={`${isLiked ? 'liked' : 'like'}`} onClick={handleLikeToggle}>&#10084;</span>
                      {myMovie.Title}, {myMovie.Year}
                    </h1>
                    <p>{myMovie.Genre}, {myMovie.Runtime}</p>
                    <div>
                      <button className={`tab ${activeTab === 'plot' ? 'active' : ''}`} 
                      onClick={() => toggleTabs('plot')}
                      style={{ color: 'red' }}>
                        Описание
                      </button>
                    <button className={`tab ${activeTab === 'more' ? 'active' : ''}`} 
                    onClick={() => toggleTabs('more')}
                    style={{ color: 'red' }}
                    >
                        Подробнее
                    </button>
                    {/*<div><input type="radio" value="plot" name="tabs" id="plottab" checked={activeTab === 'plot'}
                  onChange={() => toggleTabs('plot')} className={`tab ${activeTab === 'plot' ? 'active' : ''}`}/>Описание</div>
                    <div><input type="radio" value="more" name="tabs" id="moretab" checked={activeTab === 'more'}
                  onChange={() => toggleTabs('more')} className={`tab ${activeTab === 'more' ? 'active' : ''}`}/>Подробнее</div>
                    */}
                </div>
                {activeTab === 'plot' && (
                    <p id="plot">{myMovie.Plot}</p>
                )}
                {activeTab === 'more' && (
            <div className="movieDetails">
            <p>Актеры: {myMovie.Actors}</p>
            <p>Режиссер: {myMovie.Director}</p>
            <p>Дата выхода: {myMovie.Released}</p>
            <p>Язык: {myMovie.Language}</p>
            <p>Страна: {myMovie.Country}</p>
            <p>Рейтинг imdb: {myMovie.imdbRating} ({myMovie.imdbVotes} голосов)</p>
            </div>
            
            )}
            </div>
            
        </div>
        
            </>
        )}
    </div>
  );
}