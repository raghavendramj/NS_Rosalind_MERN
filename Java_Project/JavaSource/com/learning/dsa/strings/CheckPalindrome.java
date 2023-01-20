package com.learning.dsa.strings;

public class CheckPalindrome {

    public static boolean isPalindromeOptimized(String input) {

        //initialization; comparision; increment/decrement
        for (int i = 0, j = input.length() - 1; i < j; i++, j--) {
            if (input.charAt(i) != input.charAt(j))
                return false;
        }
        return true;
    }


    public static boolean isPlaindrome(String input) {
        String reversed = "";

        for (int i = input.length() - 1; i >= 0; i--) {
            reversed = reversed + input.charAt(i);
        }
        //System.out.println("reversed string is " + reversed);


        boolean areStringsEqual = input.equals(reversed);
        //System.out.println("Is given string a palindrome : " + areStringsEqual);
        return areStringsEqual;

    }

    public static void main(String[] args) {

        System.out.println("is raghav a palindrome : "+ isPlaindrome("raghav"));
        System.out.println("is raghav a palindrome : "+ isPalindromeOptimized("raghav"));

        System.out.println("is madam a palindrome : "+ isPlaindrome("madam"));
        System.out.println("is madam a palindrome : "+ isPalindromeOptimized("madam"));

    }
}
