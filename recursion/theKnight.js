

let row =3;
let col =8;
let N= 5;

let arr =[];
        for(let i=0;i<10;i++){
            let newArr =[];
            for(let j=0;j<10;j++) newArr.push(0);
            arr.push(newArr);
        }

printArr(arr);

followTheKnight(arr,row-1,col-1,N);

console.log(count(arr));

printArr(arr);

function followTheKnight(board,row,col,N){
    if(row<0 || row>=board.length || col<0|| col>=board.length) return;
    
    if(N===0){
        board[row][col]=1;
        return;
    }
    
    followTheKnight(board,row-2,col+1,N-1);
    followTheKnight(board,row-2,col-1,N-1);
    followTheKnight(board,row+2,col-1,N-1);
    followTheKnight(board,row+2,col+1,N-1);
    followTheKnight(board,row-1,col+2,N-1);
    followTheKnight(board,row+1,col+2,N-1);
    followTheKnight(board,row+1,col-2,N-1);
    followTheKnight(board,row-1,col-2,N-1);
}

function printArr(arr){
    for(let i=0;i<arr.length;i++) console.log(arr[i].join(" "));
}

function count(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j =0 ;j<arr.length;j++){
            if(arr[i][j]==1) count++;
        }
    }
    return count;
}