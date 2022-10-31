import React, { useState,useEffect } from 'react'
import "../css/Home.css"

const Musics = () => {
   const[songs,setsongs] = useState([]);

   useEffect(() => {
     fetch("  http://localhost:1212/music")
     .then(res=>res.json())
     .then((res)=>setsongs(res))
   }, [])

   console.log(songs)

    return (
        <div>
            <div class="card" >
                <div class="card-body">
                <h1>Musics</h1>
                <div className='music'>
               {songs.map(song=>
                <tr><td>{song.id}</td><td ><a >{song.moviename}</a></td><td>{song.songnames.map(ss=><tr><a href={ss.href}>{ss.name}</a></tr>)}</td></tr>
               )}
               </div>
                </div>
            </div>
        </div>
    )
}

export default Musics
