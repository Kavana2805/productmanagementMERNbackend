const express = require("express");
const Joi = require("joi") ;

const userSchema = Joi.object({
 name: Joi.string().min(3).max(30).required(),
 email: Joi.string().email().required(), 
 password: Joi.string().min(6).max(20).required(), 
 age: Joi.number().integer().min(18).max(100),    
});

app.use(express.json());

app.post("/register",(req,res) =>{
const{error , value} = userSchema.validation(req.body, { abortEarly: false});


if(error){
return res.status(400).json({
   message:"validation error",
   details:error.details.map((err) => err.message), 
});
}
res.status(200).json({message: "user registered successfully!", user: value});
});
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
















const express = require ("express");
const morgan = require ('morgan');
const debug = require ('debug');
const app = express();

app.use(morgan('dev'));

//app.get("/", (req,res) => {
   // res.send("First GET Route")
//});

app.post("/",(req,res,next) => {
    try {
        const value = req.body.value;
        if (value) {
            res.send("Value received: ${value}");
        } else {
            throw Error("value missing!");
        }
        } catch (error) {
            next(error);
        }
});

//app.use((req,res,next) => {
  //  const error = new Error("Route not found");
    //error.status = 404;
    //next(error);
//});

app.listen(3000, () =>
console.log("server is running on port http://localhost:3000")
);