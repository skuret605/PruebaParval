import express from "express";
import cors from "cors";
import authRoutes from "./routes/authentication.js";
import investmentsRoutes from "./routes/investmensRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/login", authRoutes);
app.use("/investments", investmentsRoutes);

app.listen(PORT, () => {
  console.log(
    `El servidor esta corriendo en el puerto: http://localhost:${PORT}`
  );
});

export default app;
