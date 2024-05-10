const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const spawn = require('child_process').spawn;
const { uuid } = require('uuidv4');
const static = require('serve-static');

const port = process.env.PORT || 8080;
const hostname = '172.30.1.13';

app.use(express.json({
    limit : "50mb"
}));
app.use(cors());
app.use(static(__dirname));
app.use(static(path.join(__dirname, 'image')));
app.use( '/', express.static( path.join(__dirname, 'project/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project/build/index.html'));
})

app.post('/api/rmbg', (req, res) => {
    const imgSrc = req.body.src;
    const base64Image = imgSrc.split(';base64,').pop();
    const fileName = uuid();
    require('fs').writeFile(`C:/photoEditing/image/upload/${fileName}.jpg`, base64Image, {encoding: 'base64'}, function(err){
        console.log('err');
    });
    const result = spawn('python', ['backgroundRemove.py', fileName]);
    result.stdout.on('data', function(data){
        res.send({fileName : fileName});
    });
})

app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});