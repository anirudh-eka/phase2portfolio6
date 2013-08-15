function Die() {
  this.value = 1;
  this.view;
}

Die.prototype.roll = function(){
  console.log("roll die")
  this.value = Math.floor((Math.random()*6)+1);
}

Die.prototype.render = function(){
  console.log("render die")
  this.view = '<div class="die">'+this.value+'</div>';
}

function Bag() {
  this.dice = [];
}

Bag.prototype.addDice = function(){
  this.dice.push(new Die);  
}

Bag.prototype.rollDice = function(){
  for (var i = 0; i < this.dice.length; i++) {
    console.log("roll die "+i)
    this.dice[i].roll(); 
  }  
}

Bag.prototype.renderDice = function(){
  for (var i = 0; i < this.dice.length; i++) {
    console.log("render die"+i)
    this.dice[i].render(); 
  }  
}

function View() {
  this.bag = new Bag
}

View.prototype.addDie = function(){
  this.bag.addDice();
  this.bag.renderDice();
  return this.bag.dice[this.bag.dice.length-1].view
}

View.prototype.rollDice = function(){
  this.bag.rollDice();
  this.bag.renderDice();
  var diceViewArray = [];
  for (var i = 0; i < this.bag.dice.length; i++) {
    diceViewArray.push(this.bag.dice[i].view)
  }
  return diceViewArray
}

$(document).ready(function() {

  var view = new View;

  $('#roller button.add').on('click', function() {
    var newDie = view.addDie();
    $('.dice').append(newDie);
  });

  $('#roller button.roll').on('click', function() {
    var rolledDice = view.rollDice();
    $('.dice').children().remove();
    for (var i = 0; i < rolledDice.length; i++) {
      $('.dice').append(rolledDice[i]);
    } 
  });
});
