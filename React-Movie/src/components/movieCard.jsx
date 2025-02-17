
//import "../css/movieCard.css"
export default function MovieCard({movieInfo}) {

    function onFavoriteClick() {
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster"> 
            <img src = {movieInfo.url} alt = {movieInfo.title}/>
            <div className="movie-overlay">
                <button className="favButton" onClick={onFavoriteClick}>
                    ♥
                </button>

            </div>
        </div> 
        <div className="movie-info"> 
            <h3>{movieInfo.title} </h3>
            <p> {movieInfo.release} </p>
        </div>
    </div>
} 