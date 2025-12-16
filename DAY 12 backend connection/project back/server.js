const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const PORT=4000;
const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myCourse").then(()=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log("Error in DB Connection",err);
});
const mycourse=require('./module/CourseModule');
//used to fetch all data from mongoDB 
app.get("/api/courses", async(req,res)=>{
    try{
    const course=await mycourse.model.find();
    res.json(course);    
    }
catch(err){
    res.status(500).json({"Error":err.message});
}
})
//used to add data to mongoDB 
app.post("/api/course",async(req,res)=>{
    try{
    const {title,duration}=req.body;
    const newCourse=new mycourse.model({title,duration});
    await newCourse.save();
    res.status(201).json({"Msg":"Course Added Successfully"});    
    }
    catch(err){
        res.status(500).json({"Error":err.message});
    }
})
//used to fetch data from the mongoDB using id
app.get("/api/course/:id", async(req,res)=>{
    try{
    const course=await mycourse.model.findById(req.params.id);
    if(!course){
        return res.status(404).json({"Msg":"Course not found"});
    }
    res.json(course);    
    }
catch(err){
    res.status(500).json({"Error":err.message});
}
})
//used to update data from the mongoDB using id 
app.put("/api/put/:id",async(req,res)=>{
    try{
    const {title,duration}=req.body;
    const updatecourse=await mycourse.model.findByIdAndUpdate(req.params.id,{title,duration},{new:true});
    if(!updatecourse){
        return res.status(404).json("Course not found");    
    }
    res.json(updatecourse);
    }
    catch(err){
        res.status(500).json({"Error":err.message});
    }
})

app.delete("/api/delete/:id",async(req,res)=>{
try{
    const deletecourse=await mycourse.model.findByIdAndDelete(req.params.id); //stores all the possible data that has the id given and deleted as soon it touches it after deletion
    if(!deletecourse){
        return res.status(404).json({"Msg":"Course not found"});
    }
    res.json("Course deleted successfully");
}
catch(err){
    res.status(404).json({"Error":err.message});
}
})

app.listen(PORT,()=>{
    console.log('Server is running on PORT');
});