import React from "react";
import {Movies} from "../components/Movies"
import {Preloader} from "../components/Preloader"
import {Search} from "../components/Search"
class Main extends React.Component {
    state ={
        movies: [],
        loading: true,
    }
    
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=55d9d088&s=matrix' )
       .then(response => response.json()) 
       .then(data => this.setState({movies: data.Search, loading: false}))
}
    
    searchMovies = (str, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=55d9d088&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json()) 
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
    

    render () {
        const {movies} = this.state;
      
      return <main className="container content">
         <Search searchMovies={this.searchMovies}/>
         
          {
           movies.length ? (
           <Movies movies={this.state.movies}/>
           ) : <Preloader />
           
        }
               </main>
           
        
    }
}


    

export {Main}