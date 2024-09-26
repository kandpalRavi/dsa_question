let [size,target] =[6,3];
let arr = [2,3,3,3,6,9];
const lowerBound=(arr,n,k)=>{
    let low =0;
    let high = n-1;
    let index= -1;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid]==k){
            index = mid;
            high = mid-1;
        }
        else if(arr[mid]<k){
            low = mid+1;
        }
        else{
            high = mid -1;
        }
    }
    return index;
}
const upperBound = (arr,n,k)=>{
    let low = 0;
    let high = n-1;
    let index = -1;
    while(low<=high){
        let mid = low + Math.floor((high -low )/2);
        if(arr[mid]==k){
            index = mid;
            low = mid+1;
        }
        else if(arr[mid]<k){
            low = mid+1;
        }
        else{
            high = mid - 1;
        }

    }
    return index;
}


 const checkOccurences = (arr,n,k) =>{
    let first = lowerBound(arr,size,target);

    let last = upperBound(arr,size,target);
    console.log(last -first +1); 
}


checkOccurences(arr,size,target);
