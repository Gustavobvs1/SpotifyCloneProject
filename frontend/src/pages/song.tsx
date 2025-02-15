import { Link, useParams } from "react-router-dom";
import { Player } from "../components/player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

export function Song() {
  const { id } = useParams();

  const [songObj] = songsArray.filter(
    (currentSong) => currentSong.id === Number(id)
  );

  const [artistFromSong] = artistArray.filter(
    (item) => item.name === songObj.artist
  );

  return (
    <div className="song">
      <div className="song-container">
        <div className="song-container-image">
          <img src={songObj.image} alt={`Imagem de ${songObj.name}`} />
        </div>
      </div>

      <div className="song-bar">
        <Link to={`/artist/${artistFromSong.id}`} className="song-artist-image">
          <img
            width={75}
            height={75}
            src={artistFromSong.image}
            alt={`Imagem do artista ${artistFromSong.name}`}
          />
        </Link>

        <Player duration={songObj.duration} songId={songObj.id} />

        <div className="song-info">
          <p className="song-name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
}
