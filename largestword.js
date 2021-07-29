function largestWord(str){
  var strArray = str.split(" ");
  var counter = 0;
  for (var i = 0; i < strArray.length; i++){
    if (strArray[i].length > counter){
      counter = strArray[i].length;
    }
  }
  return counter;
}
console.log(largestWord("The quick brown fox run over the lazy dog"));
