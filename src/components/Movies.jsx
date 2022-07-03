import {Movie} from "./Movie"


function Movies (props) {
 const {movies = []} = props;

return <div className="movies">
    {movies.length ? movies.map(movie =>(
        <Movie key={movie.imdbID} {...movie}/>
    )) : <span>incorect movie title, try another please</span>
}
</div>

}

export {Movies};