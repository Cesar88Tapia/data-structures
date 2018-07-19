var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.begin = 0;
  this.done = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.done] = value;
  this.done++;
};
Queue.prototype.dequeue = function(){
  if(this.begin <= this.done){
    var newValue = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++
    return newValue;
  }
};
Queue.prototype.size = function(){
  if(this.done - this.begin > 0){
    return this.done - this.begin;
  } else {
    return 0;
  }
};
