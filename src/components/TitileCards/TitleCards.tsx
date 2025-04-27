import { Link, Path } from "react-router-dom";
import "./TitleCards.css"
import {useRef,useEffect, useState} from "react";
// import cards_data from "../../assets/cards/Cards_data.js"
interface titletype{
    title?:string;
    category?:string;
}
interface cardstype{
    original_title?:string;
    backdrop_path:Path;
    id:number;

}
function Title_cards({title,category}:titletype){
    const cardsRef = useRef<HTMLDivElement | null>(null);
    const [apiState,setApiState] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWFhNjk3NjEzMjI2ODVmZmQyY2Y0ZTE2ZDg5YjkxZSIsIm5iZiI6MTc0NTYwMDIyOS4yMjcsInN1YiI6IjY4MGJiZWU1MTVhMWQ1YTYxNGFiODgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFgNuSmsH7MfCO640FOnDmxVWw7ccfQc8hTa2BOJ3h8'
        }
      };
      
    const handlescroll = (e:WheelEvent)=>{
    e.preventDefault();
    if(cardsRef.current)
    cardsRef.current.scrollLeft += e.deltaY;
    }
    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiState(res.results))
        .catch(err => console.error(err));

        if(cardsRef.current)
        cardsRef.current.addEventListener('wheel',handlescroll, { passive: false });
    })
    return(
        <div className="title-cards">
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiState.map((card:cardstype,index)=>{
                    return <Link to={`/player/${card.id}`} className="card" key={index} >
                        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Title_cards;