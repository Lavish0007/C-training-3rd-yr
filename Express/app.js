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
const stu=[{
    id:1,
    name:"Lavish",
    class:"Btech"
}]

// data read


app.listen(port,()=>{
    console.log(`server runs at https://localhost:${port}`)
})

