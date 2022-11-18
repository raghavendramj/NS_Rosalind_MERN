package com.learning.dsa.strings;

import java.util.HashMap;

public class IsomorphicStrings {

    public static boolean isIsomorhpic(String str1, String str2) {

        if (str1.length() != str2.length())
            return false;

        HashMap<Character, Character> charMap = new HashMap<>();
        for (int i = 0; i < str1.length(); i++) {

            char currentChar = str1.charAt(i);
            char mappedValue = 0;
            if (!charMap.containsKey(currentChar)) {
                charMap.put(currentChar, str2.charAt(i));
            }

            mappedValue = charMap.get(currentChar);
            if (mappedValue != str2.charAt(i))
                return false;
        }
        return true;
    }


    public static void main(String[] args) {

        System.out.println("Are strings isomorphic : "+  isIsomorhpic("abacba", "xpxzpw"));
        System.out.println("Are strings isomorphic : "+  isIsomorhpic("abacb", "xpxzp"));

    }
}
