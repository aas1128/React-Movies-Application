import MovieCard from "../components/movieCard"
import { useState } from "react";
function Home() {
    //SearchQuery in what is being passed in and "" is the default state 
    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        {id: 1, title: "Power Rangers", release: "2024"},
        {id: 2, title: "Batman ", release: "2012"},
        {id: 3, title: "Mad Max", release: "2015"},
    ];
    
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    return <div className= "home"> 

        <form onSubmit={handleSearch} className="search-form" >
            <input 
            type="text" 
            placeholder="Search for Movie" 
            className="search-form" 
            value={searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}
            />
            
            <button type="submit" className="search-button"> Search</button>
            
        </form>
        <div className="movies-grid">
           {movies.map(movieInfo => movieInfo.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie ={movieInfo} key = {movieInfo.id}/>)}
        </div>
     </div>
}


export default Home