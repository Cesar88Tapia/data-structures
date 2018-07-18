// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  var arrange = {
    entries: 0,
    storage: {}
  }
  _.extend(arrange, stackMethods)
  return arrange;
};

  var queueMethods = {};
