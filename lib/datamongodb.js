// lib/datamongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.DATAMONGODB_URI;
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local"); 
}

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so the client isn't recreated on each request
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, create a new MongoClient instance for every request
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
