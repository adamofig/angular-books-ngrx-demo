// se necesitan en global npm i express, cors
const express = require('express')
const app = express()
var cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(cors());

const port = 3000

let products = [
  {id:1, productName:"coca", productCode: 1001},
  {id:2, productName:"pepsi", productCode: 1002},
  {id:3, productName:"delawer", productCode: 1003},
  {id:4, productName:"manzanita", productCode: 1004},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/product', (req, res) => {
  res.send(products);
})


app.post('/product', (req, res)=>{
  console.log("recibiendo", req.body);

  const id = req.body.id;
  const index= products.findIndex( (product) => product.id == id);
  console.log(index);
  products[index] = req.body;
  console.log(products)
  const response = req.body;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
