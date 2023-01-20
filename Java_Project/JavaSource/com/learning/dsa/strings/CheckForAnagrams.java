package com.learning.dsa.strings;

import java.util.Arrays;

public class CheckForAnagrams {

    static boolean areAnangrams(String str1, String str2) {

        if(str1.length() != str2.length())
            return false;

        char charArr1[] = str1.toCharArray();
        char charArr2[] = str2.toCharArray();

        Arrays.sort(charArr1);
        Arrays.sort(charArr2);

        for (int i = 0; i < charArr1.length; i++) {
            if(charArr1[i] != charArr2[i])
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int numbers[] = new int[5];
    }
}
