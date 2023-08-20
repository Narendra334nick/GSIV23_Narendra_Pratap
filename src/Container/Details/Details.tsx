import React from 'react';
import { useParams } from 'react-router-dom';
import config from "../../Config/Config";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMovieDetails } from "../../Redux/movieDetails";

export default function Details() {
  const { id } = useParams();
  const data = useSelector((state: any) => state.movie.data);
	const dispatch = useDispatch();

  React.useEffect(()=>{
    console.log("id",id);
  },[])
  return (
    <div>Details</div>
  )
}
