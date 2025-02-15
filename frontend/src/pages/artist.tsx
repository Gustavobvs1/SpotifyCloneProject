import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { SongList } from "../components/song-list";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

export function Artist() {
  const { id } = useParams();

  const [artistObj] = artistArray.filter(
    (currObj) => currObj.id === Number(id)
  );

  const songsArrayFromArtist = songsArray.filter(
    (currObj) => currObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

  return (
    <div>
      <div className="artist">
        <div
          className="artist-header"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
          }}
        >
          <h2 className="artist-title">{artistObj.name}</h2>
        </div>

        <div className="artist-body">
          <h2>Populares</h2>
          <SongList songsArrayFromArtist={songsArrayFromArtist} />
        </div>

        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="single-item-icon single-item-icon-artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>
    </div>
  );
}
