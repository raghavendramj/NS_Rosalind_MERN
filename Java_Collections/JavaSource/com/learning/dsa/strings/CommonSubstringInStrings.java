package com.learning.dsa.strings;

public class CommonSubstringInStrings {

    static String commonSubstrings(String[] strs) {
        if (strs.length == 0) {
            return "";
        }

        if (strs.length == 1) {
            return strs[0];
        }

        //extract a string with minimum length
        String smallest = strs[0];
        for (String eachString : strs) {
            if (eachString.length() < smallest.length()) {
                smallest = eachString;
            }
        }

        //keep removing one char at a time and again check all the strings.
        int i = smallest.length();

        while (i > 0) {
            String toCompare = smallest.substring(0, i);

            boolean foundCommonSubString = true;
            for (String eachString : strs) {
                if (!eachString.contains(toCompare)) {
                    foundCommonSubString = false;
                }
            }
            if (foundCommonSubString) {
                return toCompare;
            }
            i--;
        }
        return "";
    }

    public static void main(String[] args) {
        String common = commonSubstrings(new String[]{"minimum", "minmize", "mini"});
        String grace = commonSubstrings(new String[]{"grace", "graceful", "disgraceful", "gracefully"});
        String sadness = commonSubstrings(new String[]{"sadness", "sad", "sadly"});
        System.out.println("Common Substring is "+ common);
        System.out.println("Common Substring is "+ grace);
        System.out.println("Common Substring is "+ sadness);
    }
}
