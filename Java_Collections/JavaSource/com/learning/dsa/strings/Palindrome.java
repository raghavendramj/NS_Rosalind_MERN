package com.learning.dsa.strings;

public class Palindrome {

    static boolean isPalindrome(String input) {

        int j = input.length() - 1;
        for (int i = 0; i < j; i++, j--) {
            if (input.charAt(i) != input.charAt(j))
                return false;
        }
        return true;
    }

    public static void main(String[] args) {

        System.out.println("Is Palindrome : " + isPalindrome("gadag"));
        System.out.println("Is Palindrome : " + isPalindrome("madaam"));
        System.out.println("Is Palindrome : " + isPalindrome("radar"));

    }
}
