var cake = {
  name: "German Chocolate Cake",
  ingredients: ["eggs", "flour", "oil", "chocolate", "sugar", "butter"],
  topping: "coconut frosting",
  bakeTemp: "425 degrees",
  bakeTime: "45 minutes",
  customer: "Tommy",
  decorate: function(updateFunction){
    var status = "Decorating with " + this.topping + ". Ready to eat soon!"
    updateFunction(status)
    setTimeout(()=>{
      // debugger;
      updateFunction(serve.apply(this, ["Happy Eating!", this.customer]))
    }, 2000)
  }
}

var pie = {
  name: "Apple Pie",
  ingredients: ["apples", "flour", "eggs", "butter", "sugar"],
  topping: "streusel",
  bakeTemp: "350 degrees",
  bakeTime: "75 minutes",
  customer: "Tammy"
}

function makeCake() {
  var updateCakeStatus = updateStatus.bind(this);
  mix.call(cake, updateCakeStatus)
}

function makePie() {

  pie.decorate = cake.decorate.bind(this);
  var updatePieStatus = updateStatus.bind(this);
  mix.call(pie,updatePieStatus)
}

function updateStatus(statusText) {
  this.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
  var status = "Baking at " + this.bakeTemp + " for " + this.bakeTime
  setTimeout(()=> {
    cool.call(this,updateFunction)
  }, 2000)
}

function mix(updateFunction) {

  var status = "Mixing " + this.ingredients.join(", ")
  setTimeout(()=> {
    bake.call(this,updateFunction)
  }, 2000)
  updateFunction(status)
}

function cool(updateFunction) {
  var status = "It has to cool! Hands off!"
  setTimeout(()=> {
    debugger;
    this.decorate(updateFunction)
  }, 2000)
}

function makeDessert() {
  $('.js-make').click(function(){
    if(this.text == "Make Cake"){
      var cake= this.parentElement
      makeCake.call(cake);
    }else{
      var pie= this.parentElement
      makePie.call(pie);
    }
  })
  //add code here to decide which make... function to call
  //based on which link was clicked
}

function serve(message, customer) {
  //you shouldn't need to alter this function
  return(customer + ", your " + this.name + " is ready to eat! " + message)
}

document.addEventListener("DOMContentLoaded", function(event) {
  //you shouldn't need to alter this function
  var cookLinks = document.getElementsByClassName("js-make")
  for(var i=0; i<cookLinks.length; i++) {
    cookLinks[i].addEventListener("click", makeDessert)
  }
});
