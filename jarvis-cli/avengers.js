var api = require('marvel-api')
var Profile = require('./avengerProfile')


class Avengers {
  constructor(config) {
    this.marvel = api.createClient({
      publicKey : '3576b3a7bf01368d4f6c9562e15e2d68',
      privateKey : '0c5d9057e217c7fe882c5ff85beef13251b7c23c' 
    });

  }


  assemble(cb) {
    Promise.all([this.marvel.characters.findByName('Thor'),this.marvel.characters.findByName('Hulk'),this.marvel.characters.findByName('Vision'),this.marvel.characters.findByName('spider-man'),this.marvel.characters.findByName('Captain America')]).then(function (responses) {
      let avengers = []
        responses.forEach(function(character) {
          let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
          avengers.push(profile.createProfile())
        })
        console.log('Avengers Assemble!!!')
        console.log(avengers)
        cb(JSON.stringify(avengers))
      })
  }
}

module.exports = Avengers

