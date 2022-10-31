import React, { useState, useEffect } from 'react'
import "../css/Home.css"

const Movies = () => {
    const [sauthmovie, setsauthmovie] = useState([])
    const [bollymovie, setbollymovie] = useState([])
    const [hollymovie, sethollymovie] = useState([])


    useEffect(() => {
        fetch("http://localhost:1212/sauthmovie")
            .then((res) => res.json())
            .then((res) => setsauthmovie(res))

       fetch("http://localhost:1212/bollymovie")
            .then((res) => res.json())
            .then((res) => setbollymovie(res))
        
       fetch("http://localhost:1212/hollymovie")
            .then((res) => res.json())
            .then((res) => sethollymovie(res))
    }, [])

    console.log(bollymovie)

    return (
        <div>

            <div class="card" >
                <div class="card-body">
                    <table className='movietable' > <tr><th>Sr No</th><th>Movie Name</th><th>Release Date</th><th>Director</th><th>IMDB Rating</th></tr>
                        {sauthmovie.map(aa =>
                            <tr><td>{aa.id}</td><td>{aa.moviename}</td><td>{aa.ReleaseDate}</td><td>{aa.Director}</td><td>{aa.IMDBrating}</td></tr>)}
                    </table>

                    <table className='movietable' > <tr><th>Sr No</th><th>Movie Name</th><th>Release Date</th><th>Director</th><th>IMDB Rating</th></tr>
                        {bollymovie.map(aa =>
                            <tr><td>{aa.id}</td><td>{aa.moviename}</td><td>{aa.ReleaseDate}</td><td>{aa.Director}</td><td>{aa.IMDBrating}</td></tr>)}
                    </table>

                    <table className='movietable' > <tr><th>Sr No</th><th>Movie Name</th><th>Release Date</th><th>Director</th><th>IMDB Rating</th></tr>
                        {hollymovie.map(aa =>
                            <tr><td>{aa.id}</td><td>{aa.moviename}</td><td>{aa.ReleaseDate}</td><td>{aa.Director}</td><td>{aa.IMDBrating}</td></tr>)}
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Movies
