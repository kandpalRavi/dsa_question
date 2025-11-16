package Hash;
import java.util.*;

public class DiffOfOccarance {
    public static int[] occarance(int n, int[] arr){
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<n;i++){
            if(map.containsKey(arr[i])){
                map.put(arr[i],map.get(arr[i])+1);
            }
            else{
                map.put(arr[i],1);
            }
        }
        int maxFeq = Integer.MIN_VALUE;
        int minFeq = Integer.MAX_VALUE;
        int maxElem = 0;
        int minElem = 0;

        for(Map.Entry<Integer,Integer> i: map.entrySet()){
            int feq = i.getValue();
            int elem = i.getKey();

            if(feq>maxFeq){
                maxFeq = feq;
                maxElem = elem;
            }

            if(feq<minFeq){
                minFeq = feq;
                minElem = elem;
            }
        }
        System.out.println("max occaring elem: "+ maxElem);
        System.out.println("low occaring elem: "+ minElem);

        return new int[]{minElem,maxElem};
    }
    public static void main(String[] args){
        System.out.println("enter the length of array: ");
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        int[] arr = new int[n];
        System.out.println("enter the elems of array");
        for(int i=0;i<n;i++){
            System.out.print("arr["+i+"]: ");
            arr[i] = scan.nextInt();
        }
        scan.close();
        // int[] arr = {1,2,2,3,3,3,4,4,4,4};

        int [] elems = occarance(n, arr);
        System.out.println("the difference between max occaraing elem and lowests occaring elme in array: "+ (elems[1]-elems[0]));
    }
}
