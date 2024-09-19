let b = document.getElementById("carogame");

let board = [];
let data = "";

// create a 5x5 array
for (let i = 0; i < 5; i++) {
  board[i] = new Array(0, 0, 0, 0, 0);
}

// create html script to show the array
for (let i = 0; i < 5; i++) {
  data += "<br>";
  for (let j = 0; j < 5; j++) {
    data += board[i][j] + "&nbsp;&nbsp;";
  }
}
b.innerHTML = data;

// when click button Change Value
function changeValue() {
  let posX = +prompt("X (1-5):");
  let posY = +prompt("Y (1-5):");
  // change element at position (x,y) to x
  board[posX - 1][posY - 1] = "x";
  data = "";
  // create html script to show the changed array
  for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }
  b.innerHTML = data;
}
