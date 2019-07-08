'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var s = [];
  var B = objectB.value;

  for (var i = 0; i < collectionA.length; i++) {
    var temp = {};
    if(B.indexOf(collectionA[i].key) != -1){

      temp.key = collectionA[i].key;
      temp.count = collectionA[i].count - 1;
      s.push(temp);

    }
    else{
      temp.key = collectionA[i].key;
      temp.count = collectionA[i].count;
      s.push(temp);
    }
  }
return s;
}
