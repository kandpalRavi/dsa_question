package Binary_search;
import java.util.*;
// Median of Two Sorted Arrays
//hard problem tc log(n+m)
//done in (n+m)lon(n+M)
public class Problem4 {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
  
        int k =0;
        int[] arr = new int[nums1.length+nums2.length];
        for(int i=0;i<nums1.length;i++){
            arr[k]= nums1[i];
            k++;
        }
        for(int j = 0;j<nums2.length;j++){
            arr[k]= nums2[j];
            k++;
        }
        Arrays.sort(arr);
        int start = 0;
        int end = arr.length-1;
        int mid = start + (end-start)/2;
        if(arr.length%2==0) return  (arr[mid]+arr[mid+1])/2.0;
        else return arr[mid];
    }
    public static void main(String[] args){
        int[] nums1 = {1,2};
        int[] nums2 = {3,4};
        System.out.println("meadin o two sorted arrays: ");
        System.out.print(findMedianSortedArrays(nums1,nums2));
    }
}
