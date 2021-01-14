'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application');
});

app.listen(3000, () => console.log('Server ready'))