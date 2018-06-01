let express = require('express')
let app = express()

app.get('/', function(request, response) {
  response.send('Hello from Jarvis API!')
})

app.listen('3000', function() {
  console.log('running on port 3000')
})
