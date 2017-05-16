var numOfMoves = 0;
 var listOfMoves = [];

function moveDisk(from,to) {
  var disks = document.getElementById(from).querySelectorAll(".disk");
  var disk = disks[0];
  var diskID = disk.id;

  var source = '#' + diskID;
  var dest = '#' + to;
  $(source).prependTo(dest);
}

function tower_of_hanoi(n,from,aux,to) {
  var moveObj = {};
  if(n == 1) {
    //moveDisk(from,to);
    moveObj['from'] = from;
    moveObj['to'] = to;
    listOfMoves.push(moveObj);
    return;
  }

  else {
    tower_of_hanoi(n-1,from,to,aux);
    moveObj['from'] = from;
    moveObj['to'] = to;
    listOfMoves.push(moveObj);
    tower_of_hanoi(n-1,aux,from,to);
  }
}

function nextMove() {
  if(numOfMoves == listOfMoves.length) {
    location.reload();
    return;
  }
  var from = listOfMoves[numOfMoves].from;
  var to = listOfMoves[numOfMoves].to;
  numOfMoves = numOfMoves + 1;
  moveDisk(from,to);
}

document.addEventListener('DOMContentLoaded', function() {
    tower_of_hanoi(4,'A','B','C');
}, false);
