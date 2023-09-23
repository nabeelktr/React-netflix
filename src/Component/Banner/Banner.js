import React from 'react'
import "./Banner.css"
import { useEffect,useState } from 'react'


import axios from '../../Axios'
import { API_KEY, image_URL } from '../Constants/constants'
const Banner = () => {
const [movie, setmovie] = useState()
  useEffect(() => {
    
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>
    {
      
      setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
    })
  
    
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? image_URL+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button '>My List</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner