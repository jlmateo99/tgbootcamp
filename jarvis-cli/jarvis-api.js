let express = require('express')
let app = express()
let Marvel = require('./avengers')

app.get('/', function(request, response) {
  var avengers = new Marvel({
    publicKey : '3576b3a7bf01368d4f6c9562e15e2d68',
    privateKey : '0c5d9057e217c7fe882c5ff85beef13251b7c23c' 
  })
  avengers.assemble(function(avengers){
    response.send(avengers)
  })
})

app.listen('3000', function() {
  console.log('running on port 3000')
})
