package com.learning.dsa.strings;

public class LongestPalindrome {

    static boolean isPalindrome(String input) {
        int n = input.length();
        for (int i = 0; i < (n - i - 1); i++) {
            if (input.charAt(i) != input.charAt(n - i - 1))
                return false;
        }
        return true;
    }

    static String findLongestPalindrome(String input) {

        String longestPalindrome = "";
        for (int i = 0; i <= input.length(); i++) {
            for (int j = i; j <= input.length(); j++) {

                String current = input.substring(i, j);
                if (isPalindrome(current)) {
                    if (current.length() > longestPalindrome.length()) {
                        longestPalindrome = current;
                    }
                }
            }
        }
        System.out.println("Longest Palindrome is " + longestPalindrome);
        return longestPalindrome;
    }


    public static void main(String[] args) {
        findLongestPalindrome("ragabatestgadagmratatdr");
        findLongestPalindrome("babad");
        findLongestPalindrome("a");
        findLongestPalindrome("cbbd");
        findLongestPalindrome("aaaa");
    }
}
