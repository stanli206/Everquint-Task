import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/dbConfig/db.js";

dotenv.config();
const port = process.env.PORT || 5001;
connectDB();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
