import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/Image";

dotenv.config();

import "./models/Image";
import "./models/Comment";
import "./models/User";

app.listen(process.env.PORT, () => {
  console.log(`✅ OK localhost ${process.env.PORT}`);
});
