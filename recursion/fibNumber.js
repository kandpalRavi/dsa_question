
  let num  = 10;
  let x ="";
    for(let i=0;i<=num;i++){
        x +=feb(i)+" ";
    }
    console.log(x);
    
   function feb(n){
       if(n===0 || n==1){
           return n;
       }
       return feb(n-1)+feb(n-2);
   }
   