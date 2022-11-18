package com.learning.dsa.strings;

public class InPlaceSpaceReverse {

    static String inplaceReverse(String input) {
        String output = "";

        String removedSpace = input.replace(" ", "");
        int len = removedSpace.length();
        char arr[] = removedSpace.toCharArray();
        for (int i = 0; i < len - i - 1; i++) {
            char temp = arr[i];
            arr[i] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }

        output = String.valueOf(arr);

        StringBuilder outputBuilder = new StringBuilder(output);
        for (int i = 0; i < input.length(); i++) {

            char currChar = input.charAt(i);
            if (currChar == ' ') {
                outputBuilder.insert(i, " ");
            }
        }
        return outputBuilder.toString();
    }

    public static void main(String[] args) {
        String input = "my name is raghav";
        System.out.println("Input :- " + input);
        System.out.println("Output : " + inplaceReverse(input));
        ;

    }
}
