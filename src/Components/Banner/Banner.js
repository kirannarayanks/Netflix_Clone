import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import './banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[6])
    })
  },[])
  return (
    
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'><b>{movie?movie.title:""}</b></h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner