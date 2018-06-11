var createCard = function(arr,router) {
  for (var x=0; x<arr.length; x++){
    var content = document.getElementById('content')

    var card = document.createElement('div')
    card.style.width = '25%'
    card.className = 'w3-card-4'

    // Create an image
    var img = document.createElement('img')
    img.style.width = '100%'

    // Create a button
    var cbutton = document.createElement('button')
    cbutton.innerHTML = 'Get Details'
    cbutton.className = 'w3-button w3-black'

    // Grab the right image for the avenger's name
    if(arr[x].name == 'Hulk') {
      img.src = '/assets/hulktgb.jpg'
      cbutton.onclick = function() {
       window.location.href = '#/hulkDetails' 
      }

    }
    else if(arr[x].name == 'Captain America') {
      img.src = '/assets/captainamerica.jpg'
      cbutton.onclick = function() {
        //router.navigate('captains/detail')
     window.location.href = '#/captainaDetails'

      } 
    }
    else if(arr[x].name == 'Spider-Man') {
      img.src = '/assets/spiderman.jpg'
     cbutton.onclick = function() {
        //router.navigate('spiderman/detail')
      window.location.href = '#/spidermanDetails'

     } 
    }
    else if(arr[x].name == 'Vision') {
      img.src = '/assets/vision.jpg'
      cbutton.onclick = function() {
       // router.navigate('vision/detail')
      window.location.href = '#/visionDetails'

      } 
    }
    else if(arr[x].name == 'Thor') {
      img.src = '/assets/thor.jpg'
     cbutton.onclick = function() {
       // router.navigate('thor/detail')
     window.location.href = '#/thorDetails'
     } 
    }

    // Create cardContainer
    var cardContainer = document.createElement('div')
    cardContainer.className = 'w3-container w3-center'

    // Append image to card
    cardContainer.append(img)

    // Add note
    var note = document.createElement('p')
    note.innerHTML = arr[x].description

    // Add note to cardContainer
    cardContainer.append(note)

    // Append cardContainer to card
    card.append(cardContainer)

    // Append button to card
    card.append(cbutton) 

    content.append(card)

  }

}

module.exports = createCard


