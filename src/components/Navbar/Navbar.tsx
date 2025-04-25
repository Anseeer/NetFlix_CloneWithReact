import "./Navbar.css";
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import dropdown_icon from "../../assets/caret_icon.svg"
function Navbar(){
    return (
        <>
        <div className="Navbar">
        <div className="Navbar-Left" >
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Tv Show</li>
            <li>Movies</li>
            <li>New & Popular </li>
            <li>My List</li>
            <li>Browser by Language</li>
        </ul>
        </div>        
        <div className="Navbar-Right">
        <img src={search_icon} alt="Search_Icon" className="Icons"/>
        <p>Children</p>
        <img src={bell_icon} alt="Bell_icon" className="Icons" />
        <div className="navbar-profile">
            <img src={profile_img} alt="profile_icon" className="profile" />
            <img src={dropdown_icon} alt="" />
            <div className="dropdown">
                <p>Sign out from the netflix</p>
            </div>
        </div>
        </div>        
        </div>
        </>
    )
}
export default Navbar;