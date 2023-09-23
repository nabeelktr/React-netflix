import React, { useState } from 'react'
import "./RowPost.css"
import axios from '../../Axios'
import {  API_KEY, image_URL } from '../Constants/constants'
import { useEffect  } from 'react'
import YouTube from 'react-youtube';

const RowPost = (props) => {

  const [movie, setmovie] = useState([])
  const [url, seturl] = useState()

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setmovie(res.data.results);
    }).catch(err => {
      alert("network error ");
    });
  }, [props]);

  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
     if( res.data.results.length !== 0){
      seturl(res.data.results[0]);
     }else{
      console.log("not get data");
     }
    })
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    <div className='row' >
        <h1>{props.title}</h1>
        <div className="posters">
          {movie.map((obj)=>(

            <img onClick={()=> handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${image_URL+obj.backdrop_path}`} alt="poster"  />

          )) }
        </div>
      { url && <YouTube  opts={opts} videoId={url.key} /> }
    </div>
  )
}

export default RowPost