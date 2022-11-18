package com.learning.dsa.strings;

import java.util.ArrayList;
import java.util.List;

public class FindFirstNonRepeatingChar {

    static int findFirstNonRepeatingChar(String input) {

        List<Character> characters = new ArrayList<>();
        for (int i = 0; i < input.length(); i++) {
            Character currentChar = input.charAt(i);
            if (characters.contains(currentChar)) {
                characters.remove(currentChar);
            } else {
                characters.add(currentChar);
            }
        }

        if (characters.size() > 0) {
            return input.indexOf(characters.get(0));
        } else {
            return -1;
        }
    }

    public static void main(String[] args) {

        System.out.println("First Non repeating char : "+findFirstNonRepeatingChar("leetcode"));
        System.out.println("First Non repeating char : "+findFirstNonRepeatingChar("loveleetcode"));
        System.out.println("First Non repeating char : "+findFirstNonRepeatingChar("aabb"));
        System.out.println("First Non repeating char : "+findFirstNonRepeatingChar("raghavendra"));
    }
}
