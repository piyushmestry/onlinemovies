import React, { useEffect,useState } from 'react'

const News = () => {
     const [watchlistnames,setwatchlistnames] =useState([]);

     useEffect(()=>{
          fetch("http://localhost:1212/watchlist")
          .then((res)=>res.json())
          .then((res)=>setwatchlistnames(res))
    },[])

   
  

    return (
        <div>
            <div class="card" >
                <div class="card-body">
                <div ><p style={{color:'orange',fontSize:'30px',border:'2px solid',width:'400px',margin:'auto',textAlign:'center'}}>Watchlist</p></div>
              <div style={{marginTop:'20px',fontSize:'20px',marginLeft:'30px'}}> {watchlistnames.map((watch)=>watch.moviename)}
              {watchlistnames.map((watch)=><a href={watch.href}><button style={{marginLeft:'50px'}} className='btn btn-success'>Watch</button></a>)}</div>
                
                </div>
            </div>
        </div>
    )
}

export default News
