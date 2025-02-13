import { Link } from "react-router-dom";

export function SongItem() {
  return (
    <Link to="/song/1" className="song-item">
      <div className="song-item-number-album">
        <p>1</p>
        <div className="song-item-album">
          <img
            className="song-item-image"
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Image da música X"
          />
          <p className="song-item-name">Isso aí</p>
        </div>
      </div>

      <p>2:30</p>
    </Link>
  );
}
