var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-components')
var VisionDetailPage = function() {
  Menu()

  var content = document.getElementById('content')
  //create one Hulk card and put some data in it
  content.innerHTML = 'The first Vision was created by the writer-artist team of Joe Simon and Jack Kirby in Marvel Mystery Comics'

}

module.exports = VisionDetailPage
