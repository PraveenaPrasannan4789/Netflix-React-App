import React, { useEffect, useState } from "react";
import axios from '../../axios'
import { imageUrl,urls,apiKey} from "../../constants/constants";
import './RowPost.css';
import Youtube from 'react-youtube';

function RowPost(props){
    const[movies,setMovies]=useState([]);
    const[id,setId]=useState('');
    useEffect(()=>{
     axios.get(urls[props.urlType]).then((response)=>{
        console.log('kkk',response.data['results']);
        setMovies(response.data['results'])
     })
    },[])

    const getId=(id)=>{
     axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            setId(response.data.results[0])
        }
        else{
            console.log('Array is empty')
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

return(
    <div className="row">
        <h2> {props.title}</h2>
        <div  className="posters">
            {movies.map((obj)=>{
              return <img  onClick={()=>getId(obj.id)} className={props.isSmall?"smallPoster":"poster"} alt='poster' src={obj?imageUrl+obj.backdrop_path:''}></img>
            })}
        </div>
       {id && <Youtube videoId={id.key} opts={opts}  />}
    </div>
)
}

export default RowPost;