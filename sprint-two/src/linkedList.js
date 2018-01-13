var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = list.head;
    }else{
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var current = list.head;
    list.head = list.head.next;
    return current.value;
  };

  list.contains = function(target) {
    var existingNode = list.head;
    while (existingNode){
      if(existingNode.value === target){
      return true;
    }
      existingNode = existingNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
