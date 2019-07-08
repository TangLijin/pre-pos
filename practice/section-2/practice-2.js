'use strict';

function countSameElements(collection) {
  var sameElements = [];
  // collection.sort();

  var B = {};
  // var count = 0;
  for(var j = 0; j < collection.length - 1; j++){
    if(j == 0){
      B.key = collection[0];
      B.count = 1;
      if(collection[0] === collection[1])
        ++B.count;
      continue;
    }
    if(collection[j] === collection[j+1]){
      ++B.count;
    }else{
      sameElements.push(B);
      B = {};
      B.key = collection[j+1];
      B.count = 1;
    }
  }
  if(B.length!=0)
    sameElements.push(B);

  return sameElements;
}
