const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const clientPath = path.resolve(__dirname, '../client');

app.use(express.static(clientPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});










// ...

