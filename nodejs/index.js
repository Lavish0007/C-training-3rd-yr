// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const myserver = http.createServer((req, res) => {

//     if (req.url === '/') {

//         const imgPath = path.join(__dirname, 'Images', 'bool.jpg');
//         const img = fs.readFileSync(imgPath);
//         const base64Image = img.toString('base64');

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`
//             <h2>This is the About us page</h2>
//             <img src="data:image/jpeg;base64,${base64Image}" width="800" />
//         `);
//     }
//     else if (req.url === '/about') {
//         res.end("we are student");
//     }
//     else if (req.url === '/class') {
//         res.end("CE");
//     }
//     else {
//         res.end("404 page is not found");
//     }
// });

// myserver.listen(8000, () => console.log('server is running'));
// fs.writeFileSync("./class.txt","Class is commencing");
// let result=fs.readFileSync("./class.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result)
//     }

// });
// console.log(result)

// const fs = require('fs');

// fs.cp("a.txt", "copy.txt", (error) => {
//     if (error) {
//         console.log("Error:", error);
//     } else {
//         console.log("File copied successfully");
//     }
// });


// const fs=require('fs');
// fs.appendFileSync("./a.txt",`appending something`,(error)=>{
//     if(error){
//         console.log("Error",error)
//     }else{
//         console.log("Done.")
//     }
// })
// console.log("Donee.")
// fs.unlinkSync("./copy.txt");
const os=require('os');
const { fileURLToPath } = require('url');
// console.log("platform",os.platform());
// // console.log("user",os.userInfo());
// console.log("CPU ",os.arch());
// console.log("total memory ",os.totalmem());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.hostname());

// totalmemory
// freememory
// create file
// copy file
