var lines = 6

for (var i = 0; i< lines; i++){
  for (var j = 0; j<=i; j++){
  document.write("#");
  }
  document.write("<br/>");
}

for (var i = 0; i < lines; i++){
  for (var j = 0; j < lines-i-1; j++){
    document.write("#");
  }
    document.write("<br/>")
}

document.write("<br/>")

var lines = 10
for (var j = 0; j < lines; j++){
for (var i = 0; i < lines; i++){
  if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)){
    document.write("#");
  }
  else {
    document.write("0");
  }
}
    document.write("<br/>");
}
