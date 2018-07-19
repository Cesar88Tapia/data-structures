var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.entry = 0;
  this.storage ={};
};

Stack.prototype.push = function(contain){
  this.storage[this.entry] = contain;
  this.entry++;
};

Stack.prototype.pop = function(){
  if(this.entry > 0){
  this.entry--;
  var newContain = this.storage[this.entry];
  delete this.storage[this.entry];
  return newContain;
  }
};

Stack.prototype.size = function(){
  return this.entry;
};
