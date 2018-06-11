class AvengerProfile {
    constructor(hero) {
      this.name = hero.name
      this.description = hero.description
      this.comics = hero.comics
      this.events = hero.events
    }

  createProfile() {
    return {
      name: this.name,
      description: this.description,
      comics: this.comics,
      events: this.events
    }
  }
}
module.exports = AvengerProfile
