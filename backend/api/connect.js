import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//CONEXÃO COM O BD
const URL = process.env.DATABASE_CONECTOR;
const client = new MongoClient(URL);

// MANIPULANDO BD
const db = client.db("spotfy-clone");
// const songsCollection =  await db.collection("songs").find({}).toArray();

// console.log(songsCollection);

export default db;

