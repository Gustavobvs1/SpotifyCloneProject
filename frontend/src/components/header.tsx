import logoSpotify from "../assets/logo/spotify-logo.png";

export function Header() {
  return (
    <header>
      <img src={logoSpotify} alt="Logo do Spotify" />
      <a href="/" className="header-link">
        <h1>Spotify</h1>
      </a>
    </header>
  );
}
