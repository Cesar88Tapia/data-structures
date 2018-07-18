var Stack = function() {
  var someInstance = {};
  newNum = 0;

  //var oldKey = 1

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = (value) => {
    storage[newNum] = value
    newNum++
  };

  someInstance.pop = () => {
    newNum--;
    var gain = storage[newNum]
    delete storage[newNum]
    return gain
  };

  someInstance.size = () => {
    if(newNum > 0){
      return newNum;
    } else {
      return 0;
    }
  };

  return someInstance;
};
