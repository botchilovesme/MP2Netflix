import React, {useEffect, useState } from 'react';
import axios from "axios";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovies]= useState([]);
    console.log("process.env.REACT_APP_API",process.env.REACT_APP_API);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_API}${fetchUrl}`
                );
            setMovies(response.data.results);
            return response;
        };

        fetchData();
    }, []);

//   console.log("movies", movies);

 const handleClick = () => {}

    return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
            {movies && movies.map((movie)) => (
                <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={``}
                />
            ))}
        </div>
        </div>
  );
};

export default Row;