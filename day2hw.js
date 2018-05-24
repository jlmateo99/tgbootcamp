//Function
var sayHi = function(greeting) {
  console.log(greeting + ', how are you? I hope your having a good day.')
  }
   
//Variable
var bmw = 'bmw 5Series'
var audi = 'audi a8'
var dodge = 'dodge challenger'

//Arrays
var cars = ['bmw', 'audi', 'dodge']
 
//Loops
for (var x=0; x<cars.length; x++) {
  if(cars[x] == 'bmw') {
    console.log(bmw)
    sayHi('Hola')
    }

  if(cars[x] == 'audi') {
    console.log(audi)
    }

  if(cars[x] == 'dodge') {
    console.log(dodge)
  }
}

  sayHi('Sup')


