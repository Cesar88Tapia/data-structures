var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.add = 1;
  someInstance.shift = 1;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: fuction(data){
    this.storage[this.shift] = data;
    this.shift++;
  },
  pop: function(){
    if(this.shift > 0){
      this.shift--;
      var newData = this.storage[this.shift];
      delete this.storage[this.shift];
      return newData;
    }
  },
  size: function(){
    return this.shift;
  }
};
