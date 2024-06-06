let nums = [1,2,3,1];
let  k = 3

// Given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j in 
// the array such that nums[i] == nums[j] and abs(i - j) <= k.

let elem_obj ={};
for(let i=0;i<nums.length;i++){

    if(elem_obj[nums[i]]){
        console.log(true);
    }
      elem_obj[nums[i]] = i;
    
    
}

// console.log(elem_obj);