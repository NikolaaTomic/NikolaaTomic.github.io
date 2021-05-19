import './App.css';
import Logo from "./slike/logo.png";
import {Link} from "react-router-dom";


function Header() {
  return (
    <div className="Header">
        <nav className="navigacija">
            <ul>
                <li><Link to="forma" className="link">Kupnja karti</Link></li>
                <li><Link to="/informacije" className="link">Informacije</Link></li>
                <li><Link to="/"><img src={Logo} className="logo"/></Link></li>
                <li><Link to="/raspored" className="link">Raspored letova</Link></li>
                <li><Link to="/flota" className="link">Lista Zrakoplova</Link></li>
            </ul>
        </nav>
        
        
        
    </div>
  );
}

export default Header;
