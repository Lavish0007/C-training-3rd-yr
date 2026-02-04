const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

    if (req.url === '/') {

        const imgPath = path.join(__dirname, 'Images', 'bool.jpg');
        const img = fs.readFileSync(imgPath);
        const base64Image = img.toString('base64');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>This is the About us page</h2>
            <img src="data:image/jpeg;base64,${base64Image}" width="800" />
        `);
    }
    else if (req.url === '/about') {
        res.end("we are student");
    }
    else if (req.url === '/class') {
        res.end("CE");
    }
    else {
        res.end("404 page is not found");
    }
});

myserver.listen(8000, () => console.log('server is running'));
