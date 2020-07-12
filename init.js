import dotenv from "dotenv";
import app from "./app";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`✅ OK localhost ${process.env.PORT}`);
});
