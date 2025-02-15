import { Link } from "react-router-dom";
import { ItemObjProps } from "./single-item";

export function SongItem({ _id, image, name, duration, index }: ItemObjProps) {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item-number-album">
        <p>{index === undefined ? "" : index + 1}</p>
        <div className="song-item-album">
          <img
            className="song-item-image"
            src={image}
            alt={`Imagem de ${name}`}
          />
          <p className="song-item-name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
}
