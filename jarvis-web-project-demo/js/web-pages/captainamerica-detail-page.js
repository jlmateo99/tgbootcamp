var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-components')
var CaptainADetailPage = function() {
  Menu()

  var content = document.getElementById('content')
  //create one Hulk card and put some data in it
  content.innerHTML = 'Captain America was the first Marvel Comics character to appear in media outside comics with release of the 1944 movie serial CAPTAIN AMERICA'

}

module.exports = CaptainADetailPage
