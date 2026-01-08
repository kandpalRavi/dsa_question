package Array;
 // Boyer-Moore Voting Algorithm leet code problem 169
public class MajorityElem {
    public static int majorityElement(int[] nums) {
        int maj_elem = 0;
        int count = 1;
        for(int i=0;i<nums.length;i++){
            if(nums[maj_elem]==nums[i]) count++;
            else count--;
            if(count==0){
                count =1;
                maj_elem = i;
            }
        }
        count = 0;
        for(int i= 0;i<nums.length;i++){
            if(nums[maj_elem]==nums[i]) count++;
        }
        if(count>= (nums.length/2)+1) return nums[maj_elem];
        return -1;
    }
    public static void main(String[] args){
        int[] arr  ={2,2,1,1,1,1,1,1,2,2};
        System.out.println("majority elem in an array: "+ majorityElement(arr));
    }
}
