package com.learning.dsa.strings;

public class ReverseInPlaceStrings {

    static String reverseInPlace(String statement) {
        String output = "";
        String[] stringArr = statement.split(" ");


        for (String eachString : stringArr) {
            int len = eachString.length();
            char eachStringChars[] = eachString.toCharArray();

            for (int i = 0; i < len - i - 1; i++) {
                char temp = eachStringChars[i];
                eachStringChars[i] = eachString.charAt(len - i - 1);
                eachStringChars[len - i - 1] = temp;
            }
            output += String.valueOf(eachStringChars) + " ";
        }

        return output;
    }

    public static void main(String[] args) {
        String input = "my name is raghav";
        System.out.println("Input : "+ input);
        System.out.println("Reversed Strings in place : "+ reverseInPlace(input));
    }
}
