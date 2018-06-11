var createCard = require('./card-component')
var getHero = require('./get-hero')

var getAvengers = function(router) {
    var req = new XMLHttpRequest()
    req.onreadystatechange = function() {
          if(this.readyState == 4 && req.status == 200) {
                     /* console.log(req.responseText)
                      createCard(JSON.parse(req.responseText))
                  */
             createCard(JSON.parse(this.responseText))
              
           }
       }
    req.open('Get','http://jmateo.tgb2.ninja:4000')
    req.send()
}

module.exports = getAvengers
