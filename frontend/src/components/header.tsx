import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      <Link to="/" className="header-link">
        <h1>Spotify</h1>
      </Link>
    </header>
  );
}
