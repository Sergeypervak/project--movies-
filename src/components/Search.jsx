import React from "react";

class Search extends React.Component {
state = {
   search: '', 

}

handleKey = (event) => {
 if (event.key === 'Enter') {
    this.props.searchMovies (this.state.search);
 }}



render () {
    return   <div className="row">
    <div className="col s12">
      <div className="input-field ">
        <input 
            placeholder="Название фильма..." 
            className="validate"
            type="search" 
            value={this.state.search}
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}        
         />

       <button className='btn search-btn' onClick={()=>this.props.searchMovies (this.state.search)}>ПОИСК</button>
      </div>
    <div>
    
      <label>
      <input class="with-gap" name="type" type="radio" value='' />
        <span>Films and Series</span>
      </label>
   
    
      <label>
      <input class="with-gap" name="type" type="radio" value='' />
        <span>only Films</span>
      </label>
    
    
      <label>
        <input class="with-gap" name="type" type="radio" value='' />
        <span>only Series</span>
      </label>
     

    </div>
    </div>
      <bt/>
  </div>
    
}

}



export {Search}