const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

  

app.listen(PORT, ()=> {
  console.log('SERVER IS RUNNING! ON PORT ' + PORT);
})