import express from "express";
import cors from "cors";
import session, { Session } from "express-session";
import dotenv  from "dotenv";
import "dotenv/config";
// import UserRoute from "./routes/userRoutes.js";

dotenv.config();

const app = express();
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
    origin: 'http://localhost:3000'
}));
app.use(express.json());
// app.use(UserRoute);

app.listen(process.env.APP_PORT, () =>
  console.log("Server up and running")
);
