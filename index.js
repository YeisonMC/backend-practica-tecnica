import express from "express";
import cors from "cors";
import routes from "./src/routes/customersRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// TODO: USANDO RUTAS :D
app.use("/rapimoney", routes);

// app.get("/", (req, res) => {
//   db.all("SELECT * FROM clientes", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//       return res.status(500).send("Error en la consulta a la base de datos");
//     }
//     res.json(rows);
//   });
// });

const port = 3000;
app.listen(port);
console.log("Server running on port: " + port + " :D");
