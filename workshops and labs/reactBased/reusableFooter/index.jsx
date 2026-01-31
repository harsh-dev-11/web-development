export const Footer = () => {
  return (<footer>
    <nav className="navbar">
        <ul className="nav-item">
          <li className="nav-list-item"><a href="#">Fitness Dashboard</a></li>
          <li className="nav-list-item"><a href="#">Services</a></li>
        </ul>
        <ul className="nav-item">
          <li className="nav-list-item"><a href="#">Watch Videos</a></li>
          <li className="nav-list-item"><a href="#">Discord</a></li>
        </ul>
        <ul className="nav-item">
          <li className="nav-list-item"><a href="#">Privacy policies</a></li>
          <li className="nav-list-item"><a href="#">Terms and conditions</a></li>
        </ul>
      </nav>
      <p>&copy; Fitness Dashboard. All rights Reserved.</p>
      <div id="icon-container">
        <span className="icon">🎮</span>
        <span className="icon">🦜</span>
        <span className="icon">💻</span>
        <span className="icon">🏀</span>
      </div>
      </footer>)
}