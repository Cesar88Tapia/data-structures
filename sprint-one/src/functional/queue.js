var Queue = function() {
  var someInstance = {};
  var num = 1;
  var oldNum = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = (value) => {
    storage[num] = value;
    num++;
  };

  someInstance.dequeue = () => {
    var gain = storage[oldNum];
    delete storage[oldNum];
    oldNum++;
    return gain;
  };

  someInstance.size = () => {
    if(num - oldNum > 0){
      return num - oldNum;
    } else {
      return 0;
    }
  };

  return someInstance;
};
