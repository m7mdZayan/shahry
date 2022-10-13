import shahryLogo from "../../assets/shahry-logo.png"
import Avatar from "../Avatar";


const Navbar = ({ accountImg , userName }) => {
    return ( <nav className="navbar">
        <div className="navbar__logo">
            <img src={shahryLogo} alt="shahry logo" />
        </div>
        <div className="navbar__account">
            <Avatar imgSrc={accountImg} userName={userName}/>
            <span>{userName}</span>
        </div>
    </nav> );
}
 
export default Navbar;