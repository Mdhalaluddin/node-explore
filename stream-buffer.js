const http = require('http');

const fs = require('fs');

const server = http.createServer();

//listening
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    //steaming 
    const readevleSteaming = fs.createReadStream(process.cwd() +'/text/read.txt');

    readevleSteaming.on('data', (buffer) => {
        res.write(buffer);
    });

    readevleSteaming.on('end', () => {
        res.end(`Hello World`)
    })


})


server.listen(5000, () => {
    console.log(`server is listening`);
})