'use strict';

function collectSameElements(collectionA, objectB) {
  var B = [];
  B = objectB.value;

  var sameElements = [];
  var k = 0;
  for(var i = 0; i < collectionA.length; i++){
    for(var j = 0; j < B.length; j++){
      if(collectionA[i] === B[j]){
        sameElements[k] = collectionA[i];
        //sameElements.push(collectionA[i]);
        k++;
      }
    }
  }
  return sameElements;
}
