let arr  =["5","2","C","D","+"];
// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
let arr2 = ["5","-2","4","C","D","9","+","+"];
const calPoint =(arr)=>{
    let stack =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!='C'&& arr[i]!='D'&& arr[i]!=='+'){
            stack.push(Number(arr[i]));
            continue;
        }
        operation = arr[i];
        let score 
        switch(operation){
            case 'D':
                score = stack[stack.length-1]*2;
                stack.push(score);
                break;
            case '+':
                score = stack[stack.length-1]+stack[stack.length-2];
                stack.push(score);
                break;
            case 'C':
                score = stack.pop();
                break;
        }

    }
    return stack;
}

let score = calPoint(arr);
let score2 = calPoint(arr2);
console.log(score.reduce((prev,curr)=>prev+curr,0));
console.log(score2);
