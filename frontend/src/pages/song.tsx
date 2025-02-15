import { Link, useParams } from "react-router-dom";
import { Player } from "../components/player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

export function Song() {
  const { id } = useParams();

  const [songObj] = songsArray.filter((currentSong) => currentSong._id === id);

  const [artistFromSong] = artistArray.filter(
    (item) => item.name === songObj.artist
  );

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === songObj.artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song-container">
        <div className="song-container-image">
          <img src={songObj.image} alt={`Imagem de ${songObj.name}`} />
        </div>
      </div>

      <div className="song-bar">
        <Link
          to={`/artist/${artistFromSong._id}`}
          className="song-artist-image"
        >
          <img
            width={75}
            height={75}
            src={artistFromSong.image}
            alt={`Imagem do artista ${artistFromSong.name}`}
          />
        </Link>

        <Player
          duration={songObj.duration}
          audio={songObj.audio}
          randomId1={randomIdFromArtist}
          randomId2={randomId2FromArtist}
        />

        <div className="song-info">
          <p className="song-name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
}
