'use strict';

function collectSameElements(collectionA, objectB) {
  var A = [];
  var B = objectB.value;
  for (var i = 0; i < collectionA.length; i++) {
    A.push(collectionA[i].key);
  }
  var sameElements = [];
  var k = 0;
  for(var i = 0; i < A.length; i++){
    for(var j = 0; j < B.length; j++){
      if(A[i] === B[j]){
        sameElements[k] = A[i];
        //sameElements.push(collectionA[i]);
        k++;
      }
    }
  }
  return sameElements;
}
