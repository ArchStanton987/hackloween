import React from 'react'
import './Cinema.css'

class Cinema extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }


    render(){
        return(
            <div className = 'CinemaBackground'>
                <div className = 'BoxOfPictureFromTheMovie'>
                    <img className = 'PictureFromTheMovie' src= {this.state.film.posterurl} alt="Picture of the movie"/>
                </div>
            </div> 
        );
            
    }
}

export default Cinema