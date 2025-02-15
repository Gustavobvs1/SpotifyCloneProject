import { artistArray } from "../db-extra-data/artists.js";
import { songsArray } from "../db-extra-data/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currArtistObj) => {
  const newArtistsObj = { ...currArtistObj };
  delete newArtistsObj.id;

  return newArtistsObj;
});

const newSongsArray = songsArray.map((currSongObj) => {
  const newSongsObj = { ...currSongObj };
  delete newSongsObj.id;

  return newSongsObj;
});

await db
  .collection("artists")
  .insertMany(newArtistsArray)
  .then((res) => console.log(res));

await db
  .collection("songs")
  .insertMany(newSongsArray)
  .then((res) => console.log(res));
