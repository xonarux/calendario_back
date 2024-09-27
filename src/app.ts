import express from "express";
import router from "./routes/eventRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
