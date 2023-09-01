import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../Constants/constants'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie =(id)=>{
        
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data)
            if(res.data.results.length!=0){
                setUrlId(res.data.results[0])
            }
        })
      }
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
                <img onClick={props.isSmall?()=>handleMovie(obj.id):null} className={props.isSmall?'smallPoster':'poster'} src={props.isSmall?`${imageUrl+obj.poster_path}`:`${imageUrl+obj.backdrop_path}`} alt="" />
)}
            
           
        </div>
    {props.isSmall?urlId && <Youtube opts={opts} videoId={urlId.key}/>:""}
    </div>
  )
}

export default RowPost