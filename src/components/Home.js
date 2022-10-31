import React, { useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Carousel1 from '../Images/carousel1.jpg'
import Carousel2 from '../Images/carousel2.jpg'
import Carousel3 from '../Images/carousel3.jpg'
import sauthmovies1 from '../Images/sauthmovies11.jpg'
import sauthmovies2 from '../Images/sauthmovies2.jpg'
import sauthmovies3 from '../Images/sauthmovies3.jpg'
import sauthmovies4 from '../Images/sauthmovies4.jpg'
import bollymovies1 from '../Images/bollymovies1.jpg'
import bollymovies2 from '../Images/bollymovies2.jpg'
import bollymovies3 from '../Images/bollymovies3.jpg'
import bollymovies4 from '../Images/bollymovies4.jpg'
import hollymovies1 from '../Images/hollymovies1.jpg'
import hollymovies2 from '../Images/hollymovies2.jpg'
import hollymovies3 from '../Images/hollymovies3.jpg'
import hollymovies4 from '../Images/hollymovies4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import "../css/Home.css"
import Card from 'react-bootstrap/Card';
// import { useParams } from 'react-router-dom'



const Home = () => {
    // const [carousel, setcarousel] = useState([])
    // const [count, setcount] = useState(1)
    const [sauthmovie,setsauthmovie] = useState("")
    const [bollymovie,setbollymovie] = useState("")
    const [hollymovie,sethollymovie] = useState("")
    const [sauthtabledisplay,setsauthtabledisplay] = useState(false)
    const [bollytabledisplay,setbollytabledisplay] = useState(false)
    const [hollytabledisplay,sethollytabledisplay] = useState(false)

    const sauthDetails = (id) =>{
        fetch("http://localhost:1212/sauthmovie/"+id)
        .then((res)=>res.json())
         .then((res)=>setsauthmovie(res))
         .then((res)=>setsauthtabledisplay(true))
    }

    const bollyDetails = (id) =>{
        fetch("http://localhost:1212/bollymovie/"+id)
        .then((res)=>res.json())
         .then((res)=>setbollymovie(res))
         .then((res)=>setbollytabledisplay(true))
    }

    const hollyDetails = (id) =>{
        fetch("http://localhost:1212/hollymovie/"+id)
        .then((res)=>res.json())
         .then((res)=>sethollymovie(res))
         .then((res)=>sethollytabledisplay(true))
    }
    

    return (
        <div>
            
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" id="Carousel" src="https://i.ibb.co/jLhdcyG/carousel1.jpg"
                        //   src={Carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" id="Carousel" src="https://i.ibb.co/vBC30wD/carousel2.jpg"
                        //   src={Carousel2}
                        alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" id="Carousel" src="https://i.ibb.co/wc5Yn5X/carousel3.jpg"
                        //   src={Carousel3}  
                        alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <Card id='moviescard'>
      <Card.Body><div id='sauthmovie'>Sauth Movies</div>

      {sauthtabledisplay?
    <table className='sauthtable' >
        <tr ><td className='sauthtable'>Movie Name</td><td className='sauthtable'> {sauthmovie.moviename}</td></tr>
        <tr ><td className='sauthtable'>Release Date</td><td className='sauthtable'> {sauthmovie.ReleaseDate}</td></tr>
        <tr><td className='sauthtable'>Director</td><td className='sauthtable'> {sauthmovie.Director}</td></tr>
        <tr><td className='sauthtable' > IMDB Rating</td><td className='sauthtable'> {sauthmovie.IMDBrating}</td></tr>
    </table>:<table className='sauthtable' style={{display:"none"}}>
        <tr ><td className='sauthtable'>Movie Name</td><td className='sauthtable'> {sauthmovie.moviename}</td></tr>
        <tr ><td className='sauthtable'>Release Date</td><td className='sauthtable'> {sauthmovie.ReleaseDate}</td></tr>
        <tr><td className='sauthtable'>Director</td><td className='sauthtable'> {sauthmovie.Director}</td></tr>
        <tr><td className='sauthtable' > IMDB Rating</td><td className='sauthtable'> {sauthmovie.IMDBrating}</td></tr>
    </table>}


      <div class="moviesflex">
  <div >
    <img src={sauthmovies1} onClick={(id)=>sauthDetails(id=1)}  className='sauthmovies' />   
    </div>
    <div style={{display:""}}>
    <img src={sauthmovies2} onClick={(id)=>sauthDetails(id=2)}  className='sauthmovies' />
    </div>
    <div style={{display:""}}>
    <img src={sauthmovies3} onClick={(id)=>sauthDetails(id=3)} className='sauthmovies' />
    </div>
    <div style={{display:""}} >
    <img src={sauthmovies4} onClick={(id)=>sauthDetails(id=4)} className='sauthmovies' />
    </div> 
</div>



<div id='bollymovie'>Bollywood Movies</div>

{bollytabledisplay?
    <table className='bollytable' >
        <tr ><td className='bollytable'>Movie Name</td><td className='bollytable'> {bollymovie.moviename}</td></tr>
        <tr ><td className='bollytable'>Release Date</td><td className='bollytable'> {bollymovie.ReleaseDate}</td></tr>
        <tr><td className='bollytable'>Director</td><td className='bollytable'> {bollymovie.Director}</td></tr>
        <tr><td className='bollytable' > IMDB Rating</td><td className='bollytable'> {bollymovie.IMDBrating}</td></tr>
    </table>:<table className='bollytable' style={{display:"none"}}>
        <tr ><td className='bollytable'>Movie Name</td><td className='bollytable'> {bollymovie.moviename}</td></tr>
        <tr ><td className='bollytable'>Release Date</td><td className='bollytable'> {bollymovie.ReleaseDate}</td></tr>
        <tr><td className='bollytable'>Director</td><td className='bollytable'> {bollymovie.Director}</td></tr>
        <tr><td className='bollytable' > IMDB Rating</td><td className='bollytable'> {bollymovie.IMDBrating}</td></tr>
    </table>}

<div class="moviesflex">
  <div >
    <img src={bollymovies1} onClick={(id)=>bollyDetails(id=1)} className='sauthmovies'/>
    </div>
    <div >
    <img src={bollymovies2} onClick={(id)=>bollyDetails(id=2)} className='sauthmovies'/>
    </div>
    <div >
    <img src={bollymovies3} onClick={(id)=>bollyDetails(id=3)} className='sauthmovies'/>
    </div>
    <div >
    <img src={bollymovies4} onClick={(id)=>bollyDetails(id=4)} className='sauthmovies'/>
    </div>
</div>

<div id='hollymovie'>Hollywood Movies</div>

{hollytabledisplay?
    <table className='hollytable' >
        <tr ><td className='hollytable'>Movie Name</td><td className='hollytable'> {hollymovie.moviename}</td></tr>
        <tr ><td className='hollytable'>Release Date</td><td className='hollytable'> {hollymovie.ReleaseDate}</td></tr>
        <tr><td className='hollytable'>Director</td><td className='hollytable'> {hollymovie.Director}</td></tr>
        <tr><td className='hollytable' > IMDB Rating</td><td className='hollytable'> {hollymovie.IMDBrating}</td></tr>
    </table>:<table className='hollytable' style={{display:"none"}}>
        <tr ><td className='hollytable'>Movie Name</td><td className='hollytable'> {hollymovie.moviename}</td></tr>
        <tr ><td className='hollytable'>Release Date</td><td className='hollytable'> {hollymovie.ReleaseDate}</td></tr>
        <tr><td className='hollytable'>Director</td><td className='hollytable'> {hollymovie.Director}</td></tr>
        <tr><td className='hollytable' > IMDB Rating</td><td className='hollytable'> {hollymovie.IMDBrating}</td></tr>
    </table>}

<div class="moviesflex">
  <div >
    <img src={hollymovies1} onClick={(id)=>hollyDetails(id=1)} className='sauthmovies'/>
    </div>
    <div >
    <img src={hollymovies2} onClick={(id)=>hollyDetails(id=2)} className='sauthmovies'/>
    </div>
    <div >
    <img src={hollymovies3} onClick={(id)=>hollyDetails(id=3)} className='sauthmovies'/>
    </div>
    <div >
    <img src={hollymovies4} onClick={(id)=>hollyDetails(id=4)} className='sauthmovies'/>
    </div>
</div>
</Card.Body>
    </Card>
            
        </div>
    )
}

export default Home
