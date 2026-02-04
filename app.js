import express from "express"
import userRouter from "./routes/routes.js"

const app = express();

// Body Parse(JSON)
app.use(express.json());

//Base Route
app.get("/", (req, res)=>{
    res.send("User Management API is Running");
});

// User Router
app.use("/api/users",userRouter);

export default app;