package Backtraking;
import java.util.*;
public class LetterCombination {
    static String[] key = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    public static List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if(digits== null || digits.length()==0) return result;
        backTrak(0, digits, new StringBuilder(), result);
        return result;
    }
    public static void backTrak(int index, String digits,StringBuilder curr, List<String> result){
        if (index == digits.length()) {
            result.add(curr.toString());
            return;
        }
        String letters = key[digits.charAt(index) - '0'];
        for(char ch: letters.toCharArray()){
            curr.append(ch);
            backTrak(index+1, digits, curr, result);
            curr.deleteCharAt(curr.length()-1);
        }
    }
    public static void main( String[] args){
         List<String> ans = letterCombinations("23");
        System.out.println(ans);
    }
}
