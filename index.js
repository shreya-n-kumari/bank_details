const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./dbConnection/db');
const Bank = require('./models/detail.model.js')


const app = express();

app.use(bodyParser.json());

connectDB();

app.get('/search/:name', (req, res)=> {

  var name = req.params.name;
  
  Bank.findOne({bankName : name}, (err,result) =>{
    console.log('result', result);

    if(err){
      console.log(err.message)
    }else{
      res.send(`Data fetched : ${result}`)
    }
  })
});

app.get('/', (req, res)=>{
    res.send(`Hello world!`)
})
  
const port = 2000;
// listen for requests
app.listen(port, () => {
console.log('Express Server is listening on port: ' + port);
});
  