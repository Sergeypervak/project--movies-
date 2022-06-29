import {Movie} from "./Movie"


function Movies (props) {
 const {movies = []} = props;

return <div className="movies">
    {movies.length ? movies.map(movie =>(
        <Movie key={movie.imdbID} {...movie}/>
    )) : <span>С таким названием - ничего не найдено. Проверьте свой запрос !</span>
}
</div>

}

export {Movies};