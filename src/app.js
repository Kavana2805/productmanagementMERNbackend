const express=require("express");
const morgan=require("morgan");
const app=express();
const productRoutes=require("./routes/productRoutes");


app.use(morgan("dev"));

app.use(express.json());
app.use("/sportshop",productRoutes);


app.use((req,res)=>{
    const error=new Error("page not found");
    error.status=404;
    next(error);
});

app.use((err,req,res,next)=>{
      console.error(err.stack)
    res.status(error.status||500).json({error:{
        success:false,
        message:err.message||"an unexpected error occured",
        status:err.status||500
    }})
    res.status(500).send("something wrong");
});

module.exports=app;