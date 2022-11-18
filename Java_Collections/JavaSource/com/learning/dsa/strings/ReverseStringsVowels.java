package com.learning.dsa.strings;

import java.util.Arrays;
import java.util.List;

public class ReverseStringsVowels {

    static String reverseVowels(String input) {

        char arr[] = input.toCharArray();
        List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U');

        int left = 0;
        int right = input.length() - 1;

        char ls = 0, rs = 0;
        while (left < right) {

            ls = arr[left];
            rs = arr[right];

            if (vowels.contains(ls) && vowels.contains(rs)) {
                arr[left] = rs;
                arr[right] = ls;
                left++;
                right--;
            }

            if (!vowels.contains(ls)) {
                left++;
            }

            if (!vowels.contains(rs)) {
                right--;
            }
        }

        return String.valueOf(arr);
    }


    public static void main(String[] args) {
        System.out.println("Answer is "+ reverseVowels("hello"));
        System.out.println("Answer is "+ reverseVowels("leetcode"));
    }
}
