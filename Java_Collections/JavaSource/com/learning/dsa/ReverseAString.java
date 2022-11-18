package com.learning.dsa;

public class ReverseAString {


    public static void main(String[] args) {
        reverseString("raghav");
        reverseStringOptimised("raghav");

        reverseString("leetcodequest");
        reverseStringOptimised("leetcodequest");
    }

    public static void reverseStringOptimised(String input) {

        char array[] = input.toCharArray();

        int i = 0;
        int j = input.length() - 1;

        while (i < j) {
            char temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }

        System.out.println("Reversed String is : " + String.valueOf(array));

    }

    public static String reverseString(String input) {
        String output = "";
        for (int i = input.length() - 1; i >= 0; i--) {
            output += input.charAt(i);
        }
        System.out.println("Reversed String is : " + output);
        return output;
    }
}
