import "./TitleCards.css"
import {useRef,useEffect} from "react";
import cards_data from "../../assets/cards/Cards_data.js"
interface titletype{
    title?:string;
}
function Title_cards({title}:titletype){
    const cardsRef = useRef<HTMLDivElement | null>(null);
    const handlescroll = (e:WheelEvent)=>{
    e.preventDefault();
    if(cardsRef.current)
    cardsRef.current.scrollLeft += e.deltaY;
    }
    useEffect(()=>{
        if(cardsRef.current)
        cardsRef.current.addEventListener('wheel',handlescroll, { passive: false });
    })
    return(
        <div className="title-cards">
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {cards_data.map((card,index)=>{
                    return <div className="card" key={index} >
                        <img src={card.image} alt="" />
                        <p>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Title_cards;