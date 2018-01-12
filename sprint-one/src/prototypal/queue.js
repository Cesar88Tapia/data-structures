var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.add = 1;
  someInstance.remove = 1;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.add] = value;
    this.add++;
  },
  dequeue: function(){
    var newValue = this.storage[this.remove];
    delete this.storage[this.remove];
    this.remove++;
    return newValue;
  },
  size: function(){
    if(this.add - this.remove > 0){
      return this.add - this.remove;
    } else {
      return 0;
    }
  }
};
