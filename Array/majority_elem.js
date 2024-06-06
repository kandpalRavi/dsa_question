let array = [3,2,3];

const majorityElement = function(nums) {
    //Moore - votiog Algo
    let maj_index =0;
    let count =1;
    for(let i=0;i<nums.length;i++){
        if(nums[maj_index]==nums[i])count++;
        else count--;

        if(count ==0){
            maj_index =i;
            count =1;
        } 
    }
    count =0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[maj_index]) count++;
    }
    if(count >= Math.floor(nums.length/2)+1) return nums[maj_index];
};


let x = majorityElement(array);
console.log(x);