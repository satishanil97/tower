function moveDisk(from,to) {
  
}

function tower_of_hanoi(n,from,aux,to) {
  if(n == 1) {
    moveDisk(from,to);
    return;
  }

  else {
    tower_of_hanoi(n-1,from,to,aux);
    moveDisk(from,to);
    tower_of_hanoi(n-1,aux,from,to);
  }
}
