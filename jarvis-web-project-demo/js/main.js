var root = 'http://jmateo.tgb2.ninja:3000/#';
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);
var HomePage = require('./web-pages/home-page')
var AvengersPage = require('./web-pages/avengers-page')
var HulkDetailPage = require('./web-pages/hulk-detail-page')
var ThorDetailPage = require('./web-pages/thor-detail-page')
var CaptainADetailPage = require('./web-pages/captainamerica-detail-page')
var SpidermanDetailPage = require('./web-pages/spiderman-detail-page')
var VisionDetailPage = require('./web-pages/vision-detail-page')

router
  .on(function () {
    document.getElementById('content').innerHTML = ''
    HomePage()
  })
  .on({
    'avengers': function () {
      document.getElementById('content').innerHTML = ''
      AvengersPage(router)
    },
    'hulkDetails': function () {
      document.getElementById('content').innerHTML = ''
      HulkDetailPage()
    },
    'thorDetails': function () {
      document.getElementById('content').innerHTML = ''
      ThorDetailPage()
    },
    'captainaDetails': function () {
      document.getElementById('content').innerHTML = ''
      CaptainADetailPage()
    },
    'spidermanDetails': function () {
      document.getElementById('content').innerHTML = ''
      SpidermanDetailPage()
    },
    'visionDetails': function () {
      document.getElementById('content').innerHTML = ''
      VisionDetailPage()
    }

  })

  .resolve();

/*  
router
  .on (function() {
    document.getElementById('content').innerHTML = ''
    HomePage()
  })
.on({
  'avengers': function () {  
    document.getElementById('content').innerHTML = ''
    AvengersPage()
  }
})
  .resolve();
*/
