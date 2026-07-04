const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  host: "db",
  user: "appuser",
  password: "admin123",
  database: "myapp",
  port: 5432
});

client.connect()
.then(() => console.log("Connected to PostgreSQL"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("<h1>Hello DevOps!</h1><h2>CI/CD test Latihan B Docker</h2>");
});

app.get("/db", async (req, res) => {

    const result = await client.query("SELECT NOW()");

    res.json(result.rows);

});

app.listen(3000, () => {

    console.log("Server running on port 3000");
