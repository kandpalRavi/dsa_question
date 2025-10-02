public class QuickSort {
    public static void quick(int [] arr, int low, int high){
        if(low < high){
            int pivot = partition(arr, low, high);
            quick(arr, low, pivot-1);
            quick(arr, pivot+1, high);
        }
    }
    public static int partition(int [] arr, int low, int high){
        int pivot = arr[low];
        int i = low;
        int j = high;
        
        while(i<j){
            while(arr[i]<= pivot && arr[i]<= pivot ){
                i++;
            }
            while(arr[j]> pivot && arr[j] >= pivot){
                j--;
            }   
            if(i<j){
                swap(arr,i,j);
            }
        }
        swap(arr, low, j); 
        return j;
    }

    public static void swap(int [] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    public static void main(String[] args){
        int [] arr = {4,6,2,5,7,10,9,1,3};
        System.out.println(" before sorting: ");
        for (int i : arr) {
            System.out.print(i+" ");
        }
        System.out.println();
        System.out.println(" after sorting: ");
        quick(arr,0,arr.length-1);
        for (int i : arr) {
            System.out.print(i+" ");
        }
    }
    
}
