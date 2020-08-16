import "./models/Image";
import "./models/Comment";
import "./models/User";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 7000;

const handleListening = () =>
  console.log(`✅ OK localhost ${process.env.PORT}`);

app.listen(PORT, handleListening);
