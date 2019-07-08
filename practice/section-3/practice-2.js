'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var s = [];
  var B = objectB.value;

  for (var i = 0; i < collectionA.length; i++) {
    var temp = {};

    if(B.indexOf(collectionA[i].key) != -1){
      temp.key = collectionA[i].key;
      var beishu = Math.floor((collectionA[i].count)/3);
      temp.count = collectionA[i].count - beishu;

    }
    else{
      temp.key = collectionA[i].key;
      temp.count = collectionA[i].count;

    }
    s.push(temp);
  }
  return s;
}
