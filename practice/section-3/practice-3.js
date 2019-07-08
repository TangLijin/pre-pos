'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var sameElements = [];
  // collection.sort();

  var B = {};
  // var count = 0;
  for(var j = 0; j < collectionA.length - 1; j++){
    if(j == 0){
      B.key = collectionA[0];
      B.count = 1;
      if(collectionA[0] === collectionA[1])
        ++B.count;
      continue;
    }
    if(collectionA[j] === collectionA[j+1]){
      ++B.count;
    }else{
      sameElements.push(B);
      B = {};
      B.key = collectionA[j+1];
      B.count = 1;
    }
  }
  if(B.length!=0)
    sameElements.push(B);

  var s = [];
  var BB = objectB.value;

  for (var i = 0; i < sameElements.length; i++) {
    var temp = {};

    if(BB.indexOf(sameElements[i].key) != -1){
      temp.key = sameElements[i].key;
      var beishu = Math.floor((sameElements[i].count)/3);
      temp.count = sameElements[i].count - beishu;

    }
    else{
      temp.key = sameElements[i].key;
      temp.count = sameElements[i].count;

    }
    s.push(temp);
  }

  return s;
}
