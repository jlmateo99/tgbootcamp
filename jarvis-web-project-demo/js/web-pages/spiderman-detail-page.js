var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-components')
var SpidermanDetailPage = function() {
  Menu()

  var content = document.getElementById('content')
  //create one Hulk card and put some data in it
  content.innerHTML = 'Spiderman is one of the most popular and commercially succesful superheroes'

}

module.exports = SpidermanDetailPage
