const dotenv=require("dotenv");
const app=require("./app")
const connectedDB=require("./config/db");

dotenv.config();

connectDB();

const port=process.env.port ||3000;

app.listen(port, () =>{
console.log('Server has started on http://localhost:3000')
 });