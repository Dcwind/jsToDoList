const express = require('express');
const app = express();

var task = [
  {
    id: 1,
    name: 'first phase project',
  },
  {
    id: 2,
    name: 'Do Economics homework'
  }
];

var currentId = 2;

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('/tasks', (req, res) => {
  res.send({tasks : task});
});

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});
