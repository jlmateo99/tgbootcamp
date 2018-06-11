var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-components')
var HulkDetailPage = function() {
  Menu()

  var content = document.getElementById('content')
  //create one Hulk card and put some data in it
  content.innerHTML = 'One of the most iconic characters in popular culture created by writer Stan Lee and artist Jack Kirby'

}

module.exports = HulkDetailPage
