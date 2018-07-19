var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var createObj = Object.create(queueMethods);
  createObj.add = 1;
  createObj.remove = 1;
  createObj.storage = {};

  return createObj;
};

var queueMethods = {
  enqueue: function(gain){
    this.storage[this.add] = gain;
    this.add++;
  },
  dequeue: function(){
    var newGain = this.storage[this.remove];
    delete this.storage[this.remove];
    this.remove++
    return newGain;
  },
  size: function(){
    if(this.add - this.remove > 0){
      return this.add - this.remove
    } else {
      return 0;
    }
  }
};
