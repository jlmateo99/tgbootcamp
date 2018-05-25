var api = require('marvel-api')


class Marvel {
  constructor(config) {
    this.marvel = api.createClient({
      publicKey : '3576b3a7bf01368d4f6c9562e15e2d68',
      privateKey : '0c5d9057e217c7fe882c5ff85beef13251b7c23c' 
    });

}

getFirst100() {
  this.marvel.characters.findAll(100)
    .then(function(res){
      for (var index = 0; index < res.data.length; index++) {
        console.log((index +1) + '' + res.data[index].name)
      }
    })
    .fail(console.error)
    .done();

  }
}

module.exports = Marvel





