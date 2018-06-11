var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-components')
var ThorDetailPage = function() {
  Menu()

  var content = document.getElementById('content')
  //create one Hulk card and put some data in it
  content.innerHTML = 'THOR first appeared in Journey into Mystery and was created by Stan Lee'

}

module.exports = ThorDetailPage
