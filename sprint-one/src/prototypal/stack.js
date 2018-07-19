var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someIns= Object.create(stackMethods);
  someIns.tally = 0;
  someIns.storage = {};

  return someIns;
};

var stackMethods = {
  push: function(gain){
    this.storage[this.tally] = gain;
    this.tally++;
  },
  pop: function(){
    if(this.tally > 0){
      this.tally--;
      var newGain = this.storage[this.tally];
      delete this.storage[this.tally];
      return newGain;
    }
  },
  size: function(){
    return this.tally;
  }
};
