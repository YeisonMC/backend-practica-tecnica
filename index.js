import express from "express";
import cors from "cors";
import routes from "./src/routes/customersRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// TODO: USANDO RUTAS :D
app.use("/rapimoney", routes);

const port = 3000;
app.listen(port);
console.log("Server running on port: " + port + " :D");
