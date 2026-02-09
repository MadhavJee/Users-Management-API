import app from "./app.js"
const PORT = process.env.PORT || 9000;

app.listen(PORT,(err,data)=>{
    console.log("Server Running")
})