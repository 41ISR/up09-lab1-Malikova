import { Link } from "react-router-dom";
import "../Main/Main.css";
import Input from "../../app/Input/Input";
import Button from "../../app/Button/Button";
import { useEffect, useState } from "react";
import OMDBApi, { IMovie } from "../../shared/OMDBApi/OMDBApi";
import Feed from "../../app/Feed/Feed";
export default function Main() {
  const [searchValue, setValue] = useState("");
  const [searchRes, setSearchRes] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchRes((await OMDBApi.searchMovie(searchValue, currentPage)).Search);
  };

  useEffect(() => {
    console.log(searchRes);
  }, [searchRes]);
  useEffect(() => {
    console.log(searchRes);
    const func = async () => {
        let results = await OMDBApi.searchMovie(searchValue, currentPage);
      setSearchRes(results.Search);
      console.log(currentPage);
        setTotalResults(+results.TotalResults);
    };
    func();
  }, [currentPage]);

  return (
    <>
      <div className="header">
        <h2>FilmSearch</h2>
        <Link className="headerlink" to="/liked">
          Favorites &rarr;
        </Link>
      </div>
      <form onSubmit={(e) => handleSearch(e)}>
        <Input value={searchValue} setValue={setValue} />
        <Button />
      </form>
      <Feed movies={searchRes} currentPage={currentPage} totalResults={totalResults}/>
      <div id="searchResults"></div>
    </>
  );
}
