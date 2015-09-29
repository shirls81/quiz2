'use strict';

function longestString(arr) {
  var longName = "";
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] == "string") {
      if(arr[i].length > longName.length) {
      longName = arr[i];
    }
  }
}
return longName;
}
module.exports = longestString;
