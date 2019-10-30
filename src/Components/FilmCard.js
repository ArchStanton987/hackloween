import React from 'react'

function FilmCard ({ film }) {
    return (
        <div>
            <img src={film.posterUrl} alt={film.title}/>
            <p>{film.title}</p>
            <p>{film.director}</p>
            <p>{film.year}</p>
        </div>
    )
}

export default FilmCard