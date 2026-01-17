package Hash;

import java.util.HashMap;

public class Problem3 {
     public static int lengthOfLongestSubstring(String s) {
        int left = 0;
        int maxLen =0;
        HashMap<Character,Integer> map = new HashMap<>();
        for(int right =0; right<s.length();right++){
            char ch = s.charAt(right);
            if(map.containsKey(ch)){
                left = Math.max(map.get(ch)+1,left);
            }
            map.put(ch,right);
            maxLen = Math.max(maxLen,right-left+1);
        }
        return maxLen;
    }
    public static void main(String[] args){
        String str = "abcabcbb";
        System.out.println("length of longest substring is: "+ lengthOfLongestSubstring(str));
    }
}
