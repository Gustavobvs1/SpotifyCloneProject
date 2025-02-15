import axios from "axios";

const URL = "http://localhost:3001";

interface ArtistArrayProps {
  image: string;
  name: string;
  _id: string;
  banner: string;
}

interface SongProps {
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
  _id: string;
}

const responseSongs = await axios.get(`${URL}/songs`);
const responseArtists = await axios.get(`${URL}/artists`);

export const songsArray: SongProps[] = responseSongs.data;
export const artistArray: ArtistArrayProps[] = responseArtists.data;
