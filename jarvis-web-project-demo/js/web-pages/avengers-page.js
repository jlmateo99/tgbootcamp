var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-components')
var AvengersPage = function(router) {
    Menu()
    getAvengers({all:true},router)
}

module.exports = AvengersPage
