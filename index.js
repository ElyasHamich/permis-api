const express = require('express');

const app = express();
const port = process.env.PORT || 8001


// Middlewares
app.use(express.json())


app.listen(port, () => {
    console.log("server running on " + port);
})


app.get('/audio/:name', function (req, res, next) {
    let name = req.params.name;
    console.log('The id: ' + name);
    res.sendFile(__dirname + `/audio/${name}`);
});

app.get('/images/:name', function (req, res, next) {
    let name = req.params.name;
    console.log('The id: ' + name);
    res.sendFile(__dirname + `/images/${name}`);
});