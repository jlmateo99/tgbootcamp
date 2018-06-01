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
    Promise.all([this.marvel.characters.findByName('Thor')]).then((responses) => {
      let heroProfiles = []
        responses.forEach((character) => {
          let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
          heroProfiles.push(profile.createProfile())
        })
        console.log('Avengers Assemble!!!')
        cb(JSON.stringify(heroProfiles))
      })
  }
}

module.exports = Avengers

