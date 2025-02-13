import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SongList } from "../components/song-list";

export function Artist() {
  return (
    <div>
      <div className="artist">
        <div
          className="artist-header"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(https://i.scdn.co/image/ab67618600001016909a162796dbc3629a1fadeb)`,
          }}
        >
          <h2 className="artist-title">Jorge e Matheus</h2>
        </div>

        <div className="artist-body">
          <h2>Populares</h2>
          <SongList />
        </div>

        <Link to={"/song/1"}>
          <FontAwesomeIcon
            className="single-item-icon single-item-icon-artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>
    </div>
  );
}
