import Navbar from "../../components/Navbar/Navbar";
import Hero_banner from "../../assets/hero_banner.jpg"
import Hero_title from "../../assets/hero_title.png"
import Play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import Title_cards from "../../components/TitileCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import "./Home.css"
function Home(){
    return (
        <>
        <div className="Home">
        <Navbar />
        <div className="Hero">
            <img src={Hero_banner} alt="" className="banner-img"/>
            <div className="Hero_caption">
            <img src={Hero_title} alt="" className="caption_img" />
            <p>Discovering his ties to a secret ancient order, a young
            man living in modern istanbul embarks on a quest to save the 
            city from an immortal enemy.
            </p>
            <div className="Hero_buttons">
               <button className="btn"><img src={Play_icon} alt="" />Play</button>
               <button className="btn btn-dark"><img src={info_icon} alt="" />More Info</button>
            </div>
            <div className="title_cards">
            <Title_cards />
            </div>
            </div>
        </div>
        <div className="more-cards">
        <Title_cards title={"BlockBlaster Movies"} category={"popular"} />
        <Title_cards title={"Only On Netflix"} category={"top_rated"}/>
        <Title_cards title={"Upcoming"} category={"upcoming"}/>
        <Title_cards title={"Top pics for you"} category={"now_playing"}/>
        </div>
        <Footer />
        </div>
        </>
    )
}
export default Home;