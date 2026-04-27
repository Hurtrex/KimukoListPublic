import { Link } from "react-router-dom"
import "../styles/navbar.css"


//the emoji will need to remove for all the project will need to find image for it to be clean
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">🎮 KimuKoList</div>

      <div className="nav-links">
        <Link to="/">Explorer</Link>
        <Link to="/my-games">Mon catalogue</Link>
      </div>
    </nav>
  )
}

export default Navbar