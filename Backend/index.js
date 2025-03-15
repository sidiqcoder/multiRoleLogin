import express from "express";
import cors from "cors";
import session, { Session } from "express-session";
import dotenv  from "dotenv";
import "dotenv/config";
import database from "./config/db.js";
import UserRoute from "./routes/userRoutes.js";
import ProdukRoute from "./routes/produkRoutes.js";

dotenv.config();

const app = express();

// (async () => {
//     await database.sync();
// })();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(ProdukRoute);



app.listen(process.env.APP_PORT, () =>
  console.log("Server up and running")
);

