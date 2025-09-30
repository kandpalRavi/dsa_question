package Binary_search;

class SearchRotetedArray{
    public static int search(int[] nums, int t) {
        int count = 0 ;

         for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                count = i + 1;  
                break;
            }
        }
       int left =  binary_search(nums, t, 0,count-1);
       if(left != -1) return left;

       int right =  binary_search(nums,t,count,nums.length-1);
       if( right !=-1 ) return right;

        return -1;  
    }
    public static int binary_search(int[] nums, int t, int left , int right){
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == t) {
                return mid;
            } else if (nums[mid] < t) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
        
    }

    public static void main(String[]  args){
        int [] arr = new int[]{4,5,6,7,0,1,2};

        System.out.println("arr elem: ");
        for (int i : arr) {
            System.out.print(i+" ");
        }
        System.out.println();
        System.out.println("index of target: ");
        System.out.println(search(arr,0));

    }
}