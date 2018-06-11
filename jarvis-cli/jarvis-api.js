let express = require('express')
let app = express()
let Marvel = require('./avengers')

app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})

app.get('/', function(request, response) {
  var avengers = new Marvel({
    publicKey : '3576b3a7bf01368d4f6c9562e15e2d68',
    privateKey : '0c5d9057e217c7fe882c5ff85beef13251b7c23c' 
  })
  avengers.assemble(function(avengers){
    response.send(JSON.parse(avengers))
  })
})

app.listen('4000', function() {
  console.log('running on port 4000')
})
