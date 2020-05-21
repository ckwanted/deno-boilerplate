import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const ENV = config();

const client = new MongoClient();
client.connectWithUri(ENV.DB_HOST_URL);

const db = client.database(ENV.DB_NAME);

export default db;
