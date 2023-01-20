package com.learning.dsa.strings;

public class StringCommonPrefix {

    static String findCommonChars(String str1, String str2) {
        int len1 = str1.length();
        int len2 = str2.length();
        String result = "";
        for (int i = 0, j = 0; i < len1 && j < len2; i++, j++) {
            if (str1.charAt(i) != str2.charAt(j)) {
                break;
            }
            result += str1.charAt(i);
        }
        return result;
    }

    static String findCommonPrefix(String arr[]) {
        String commonPrefix = arr[0];
        for (int i = 1; i < arr.length; i++) {
            commonPrefix = findCommonChars(commonPrefix, arr[i]);
        }
        return commonPrefix;
    }

    public static void main(String[] args) {
        String names[] = {"rahul", "rahu", "rahulkl", "ra"};
        System.out.println("Common prefix is :- " + findCommonPrefix(names));
    }
}
