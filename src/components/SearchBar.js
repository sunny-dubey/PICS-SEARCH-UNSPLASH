import React, { useState} from "react";
import './SearchBar.css';

const SearchBar=({ onSubmit })=>{
  const [term, setTerm] = useState('');
   
  const handleFormSubmit=(event)=>{
    
    event.preventDefault();
    onSubmit(term);
    

    
  }
  const handleChange=(event)=>{
      setTerm(event.target.value);
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}> 
        <label>Enter Search Term</label>
        <input type="text" value={term} onChange={handleChange}></input>
      </form>
    </div>
  )
}

export default SearchBar;