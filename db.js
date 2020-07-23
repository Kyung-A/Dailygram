import mongoose from "mongoose";
import dotenv from "dotenv";

// string으로 저장된 db, 데이터베이스가 있는 위치
mongoose.connect("mongodb://localhost:27017/daliygram", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const dbOpen = () => console.log("✅ Connected to mongoDB");
const dbError = (error) => {
  console.log(`💥 DB Error : ${errer}`);
};

db.once("open", dbOpen);
db.on("error", dbError);
