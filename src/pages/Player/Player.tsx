import { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import "./Player.css"
import { useNavigate, useParams } from "react-router-dom";
function Player(){
    const {id} = useParams();
    const navigate = useNavigate();
    const[apiData,setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWFhNjk3NjEzMjI2ODVmZmQyY2Y0ZTE2ZDg5YjkxZSIsIm5iZiI6MTc0NTYwMDIyOS4yMjcsInN1YiI6IjY4MGJiZWU1MTVhMWQ1YTYxNGFiODgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFgNuSmsH7MfCO640FOnDmxVWw7ccfQc8hTa2BOJ3h8'
        }
      };

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      })
      

    return (
        <>
        <div className="Player">
        <img src={back_arrow_icon} alt="" onClick={()=> navigate(-2)} />
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="Trailer" allowFullScreen frameBorder='0'></iframe>
        <div className="Player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
        </div>
        </>
    )
}
export default Player;