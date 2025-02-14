import { Link } from "react-router-dom";
import { Player } from "../components/player";

export function Song() {
  return (
    <div className="song">
      <div className="song-container">
        <div className="song-container-image">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da música X"
          />
        </div>
      </div>

      <div className="song-bar">
        <Link to="artist/1" className="song-artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt="Imagem do artista Y"
          />
        </Link>

        <Player />

        <div className="song-info">
          <p className="song-name">Isso aí</p>
          <p>Meu amigo arnaldo</p>
        </div>
      </div>
    </div>
  );
}
