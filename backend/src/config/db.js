import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js"

//This code sets up a connection to a Neon serverless PostgreSQL database and then wraps that connection with Drizzle ORM, allowing you to interact with your database using Drizzle's powerful and type-safe API based on your defined schema.

//This line uses the neon function (likely imported from @neondatabase/serverless or a similar package) to establish a connection to a Neon serverless PostgreSQL database.
//The result, sql, is a connection object or client provided by the Neon driver, which can be used to interact with the database.
const sql = neon(ENV.DATABASE_URL);
//This line integrates the Neon database connection with Drizzle ORM.
//drizzle is a function (likely imported from drizzle-orm/neon-http or similar) that takes the database connection (sql) and a schema definition as arguments.
//schema is an object that defines your database tables, columns, and relationships using Drizzle's schema definition language. This allows Drizzle to understand the structure of your database and provide type-safe queries.
//The db constant is the Drizzle ORM instance. This instance is then exported, making it available for other parts of your application to import and use for performing database operations (e.g., querying, inserting, updating, deleting data) in a type-safe and object-oriented manner.
export const db = drizzle(sql, { schema });
