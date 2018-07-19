var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var arrange = {
    entry: 0,
    storage: {}
  }

  _.extend(arrange, stackMethods);

  return arrange;
};

var stackMethods = {
  push: function(data){
    this.storage[this.entry] = data;
    this.entry++;
  },
  pop: function(){
    this.entry--;
    var newData = this.storage[this.entry];
    delete this.storage[this.entry];
    return newData;
  },
  size: function(){
    if(this.entry > 0){
      return this.entry;
    } else {
      return 0;
    }
  }
};
