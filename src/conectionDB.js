import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/rapimoney-db.db");
export { db };

// const db = new sqlite3.Database("./db/rapimoney-db.db");
