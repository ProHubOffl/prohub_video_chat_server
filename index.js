const express = require('express')
const app = express();
const io = require('socket.io')(http);
const path = require('path');

let socketList = {};

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.get('/ping', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT,() =>  console.log(`Application started on ${PORT}`))