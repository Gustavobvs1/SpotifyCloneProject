import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = `mongodb+srv://gustavo:${process.env.DB_PASS}@cluster0.u0gdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("SpotifyCloneProject");
