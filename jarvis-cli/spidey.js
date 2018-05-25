var api = require('marvel-api')
var colors = require('colors')

var marvel = api.createClient({
    publicKey : '3576b3a7bf01368d4f6c9562e15e2d68',
    privateKey : '0c5d9057e217c7fe882c5ff85beef13251b7c23c' 
});

marvel.characters.findByName('spider-man')
  .then(console.log)
  
 marvel.characters.findByName('spider-man')
   .then(function(res){     
    console.log('Found character ID', res.data[0].id);
    return marvel.characters.comics(res.data[0].id);
  }) 
  .then(function(res) {
    console.log('found %s comics of %s total', res.meta.count, res.meta.total)
    console.log(res.data); 
  })
  .fail(console.error)
  .done();

