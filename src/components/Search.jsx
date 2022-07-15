import React, {useState} from "react";

const Search = (props) => {
   const {
    searchMovies = Function.prototype,
} = props;
   
const [search, setSearch] = useState('');   
const [type, setType] = useState('all');   

    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies(search,type);
        }};

    const handleFilter = (event) => {
     setType(event.target.dataset.type); 
     searchMovies(search,event.target.dataset.type); 
        
    };
    
        return (
            <div className="row">   
                <div className="col s12">
                    <div className="input-field " >
                        <input
                            placeholder="search..."
                            className="validate"
                            type="search"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)}
                            
                            onKeyDown={handleKey}
                        />

                        <button
                            className="btn search-btn"
                            onClick={() =>
                                searchMovies(
                                  search, 
                                  type)
                            }
                        >
                            SEARCH
                        </button>
                    </div>
                    <div>
                       <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={handleFilter}
                                checked={type === 'all'}
                            />
                            <span>Films and Series</span>
                        </label>
                            </p>
                            <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={handleFilter}
                                checked={type === 'movie'}
                           />
                            <span>only Films</span>
                        </label>
                            </p>
                            <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={handleFilter}
                                checked={type === 'series'}
                            />
                            <span>only Series</span>
                        </label>
                            </p>
                    </div>
                </div>
                
            </div>
        );
    }


export { Search };
