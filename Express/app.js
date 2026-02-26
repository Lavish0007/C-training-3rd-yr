// const express=require('express');
// const app=express();
// const port=8000;
// app.get('/',(req,res)=>{
    //     res.send("this is my  first server");
    // })
    // app.get('/image',(req,res)=>{
        //     res.send('<img src="https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg" width="1500">');
        // })
        // app.get('/about',(req,res)=>{
            //     res.send("<marquee><h1>This is my  about page</h1></marquee>");
            // })
            // app.get('/abes',(req,res)=>{
                //     res.send(`<img src="https://i.ytimg.com/vi/Y35S3t58xLI/sddefault.jpg" width="500">
                //         <h1>ABES ENGINNERING COLLEGE</h1>`
                //     );
                // })
                // app.listen(port,()=>{
                    //     console.log(`server is  run at http://localhost:${port}`);
                    // })
                    const express=require('express');
                    const app=express();
const port=8000;

//Database (JSON)
app.use(express.json());
const stu=[{
    id:1,
    name:"Lavish",
    class:"Btech"
},{
    id:2,
    name:"jay",
    class:"bca"
    
}]

// data read(all data)
app.get('/read',(req,res)=>{
    try{
        res.status(200).json({message:"Showing all data",data:stu});
    }
    catch(err){
        res.status(500).json({message:"Data not found!",error:err.message})
    }
})

//data show (for id)
app.get('/about/:id',(req,res)=>{                      // called params -> parameter
    try{
        const id = Number(req.params.id);
        const student=stu.find(s=>s.id===id);
        if(!student){
            return res.status(404).json({message:"Student not found",data:student});
        }
        res.status(200).json({message:"Data Found",data:student})
    }
    catch(err){
        res.status(500).json({message:"Data not found!",error:err.message})
    }
})


// data addition 

app.post('/add',(req,res)=>{
    try{
        const newstu={
            id:stu.length+1,
            ...req.body    //destructuring  --reduces lines of code,  it converts all data into singli line
        }
        stu.push(newstu);
        res.status(200).json({
            message: "Student Data is Added!",
            data: newstu
            });
    }
    catch(err){
        res.status(500).json({message:"operation unsuccesful!",error:err.message})
    }
})

app.put('/edit/:id',(req,res)=>{
    try{
        const id=Number(req.params.id);
        const index=stu.find(s=>s.id===id)
        if(index==-1){
            return res.status(404).json({message:"Data Not found"});
        }
        stu[index]={
            ...stu[index],
            ...req.body
        }
        res.status(200).json({
            message: "Student Data updated!"
            });

    }
    catch(err){
        res.status(500).json({message:"operation unsuccesful!",error:err.message})
    }
})

// data Deletion

app.delete('/delete/:id',(req,res)=>{
    try{
        const id=req.params.id;
        const index=stu.find(s=>s.id==id);
        if(index==-1){
            return res.status(404).json({message:"Data Not found"});
        }
        stu.splice(index,1);
        res.status(200).json({message: "Student Data Deleted!"});
    }
    catch(err){
        res.status(500).json({message:"operation unsuccesful!",error:err.message})
    }
})

app.listen(port,()=>{
    console.log(`server runs at http://localhost:${port}`)
})
 
