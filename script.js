function swapTiles(item1,item2){
  var temp = document.getElementById(item1).className;
  document.getElementById(item1).className = document.getElementById(item2).className;
  document.getElementById(item2).className = temp;
  if(check()){
    alert("拼圖完成!")
    return;
  }
}

function shuffle(){
//Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
    for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    }
  }
}

function check(){
  var answer = new Array();
  answer[1] = new Array();
  answer[1][1]='tile1';
  answer[1][2]='tile2';
  answer[1][3]='tile3';
  answer[2] = new Array();
  answer[2][1]='tile4';
  answer[2][2]='tile5';
  answer[2][3]='tile6';
  answer[3] = new Array();
  answer[3][1]='tile7';
  answer[3][2]='tile8';
  answer[3][3]='tile9';
  
  for (var row=1;row<=3;row++) {
    for (var column=1;column<=3;column++) {
      if(answer[row][column]!=document.getElementById("cell"+row+column).className){
        return false;
      }
    }
  }
  return true;
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;

  if (tile!="tile9") {
       //Checking if white tile on the right
    if (column<3) {
      if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
        swapTiles("cell"+row+column,"cell"+row+(column+1));
        return;
      }
    }
    //Checking if white tile on the left
    if (column>1) {
      if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
        swapTiles("cell"+row+column,"cell"+row+(column-1));
        return;
      }
    }
    //Checking if white tile is above
    if (row>1) {
      if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
        swapTiles("cell"+row+column,"cell"+(row-1)+column);
        return;
      }
    }
    //Checking if white tile is below
    if (row<3) {
      if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
        swapTiles("cell"+row+column,"cell"+(row+1)+column);
        return;
      }
    }
  }
}