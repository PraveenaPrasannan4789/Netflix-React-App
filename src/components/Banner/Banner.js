import React,{useState,useEffect} from "react";
import './Banner.css';
import axios from '../../axios';
import {imageUrl, apiKey} from '../../constants/constants.js'

function Banner(){
    const[movies,setMovies]= useState()
    useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
    setMovies(response.data.results[0]);
   console.log('moviesss',response.data.results[1])
    })},[])
    return(
    <div 
    style={{backgroundImage:`url(${movies?imageUrl+ movies.backdrop_path:''})`}}
     className="banner">
        <div className="content">
            <h1 className="title">
                {movies?movies.title:'kkk'}
            </h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">
            {movies?movies.overview:'jjj'}</h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
)
}

export default Banner;