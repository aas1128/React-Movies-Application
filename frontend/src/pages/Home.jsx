import MovieCard from "../components/movieCard"
import {useState} from "react"
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "Batman", release:"2015"},
        {id: 2, title: "Spiderman", release:"2015"},
        {id: 3, title: "Superman", release:"2015"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    return (
        <div className="home">
         <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies" 
            className="search-input"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            />
           
            <button type="submit" className="search-button"> Search </button>
         </form>
            <div className="movies-grid">
        {movies.map((movie) => 
            (movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
    )
}

export default Home