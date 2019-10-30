import React from 'react'
import axios from "axios"
import FilmCard from './FilmCard'
import Cinema from './Cinema'

class FilmChoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film : {
                title: "",
                director: "",
                year: "",
                posterUrl: ""
            }
        } 
        this.getMovies = this.getMovies.bind(this)                                      
    }
    getMovies () {
        let randomId = Math.floor(Math.random() * 82)
        axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies")
			.then(response => response.data)
			.then(data => {
				this.setState({
                        film: {
                            title: data.movies[randomId].title,
                            filmdirector: data.movies[randomId].director,
                            posterUrl: data.movies[randomId].posterUrl,
                            year: data.movies[randomId].year
                        }					
				})
			})
    }
    render () {
        return (
            <div>
                <button onClick = {this.getMovies}>Choisir ses films</button>
                < FilmCard film={this.state.film} />
            </div>
        )
    }
}

export default FilmChoice
