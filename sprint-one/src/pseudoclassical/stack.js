var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enter = 0;
  this.storage = {};
};

Stack.prototype.push = function(contain){
  this.storage[this.enter] = contain;
  this.enter++;
};
Stack.prototype.pop = function(){
  if(this.enter > 0){
    this.enter--;
    var newContain = this.storage[this.enter];
    delete this.storage[this.enter];
    return newContain;
  }
};
Stack.prototype.size = function(){
  return this.enter;
};
