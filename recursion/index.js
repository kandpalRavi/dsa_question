let sum =0;

x=4;
n=2;
eToThePower(x,n);

console.log(sum.toFixed(4));

function eToThePower(x,n){
    if(n===0){
        return 1;
    }
    sum += Math.pow(x,n)/facturial(n);
    eToThePower(x,n-1);
}

function facturial(N){
    if(N===0 || N==1) return 1;
    return N * facturial(N-1);
}