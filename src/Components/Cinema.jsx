import React from 'react'
import './Cinema.css'

function Cinema ({ film }) {
    console.log(film)
    return(
        <div className = 'CinemaBackground'>
            <div className = 'BoxOfPictureFromTheMovie'>
                <img className = 'PictureFromTheMovie' src= {"https://nsa40.casimages.com/img/2019/10/07/1910070355402418.jpg"} alt="Picture of the movie"/>
            </div>
        </div> 
    )
}

export default Cinema