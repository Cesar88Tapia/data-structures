// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.


var Queue = function() {
  var serving = {
    sum: 1,
    change: 1,
    storage: {}
  }

  _.extend(serving, queueMethods)

  return serving;
};

  var queueMethods = {
    enqueue: function(gain){
      this.storage[this.sum] = gain;
      this.sum++;
    },
    dequeue: function(){
      var val = this.storage[this.change];
      delete this.storage[this.change];
      this.change++;
      return val;
    },
    size: function(){
      if(this.sum - this.change > 0){
        return this.sum - this.change;
      } else {
        return 0;
      }
    }
  };
