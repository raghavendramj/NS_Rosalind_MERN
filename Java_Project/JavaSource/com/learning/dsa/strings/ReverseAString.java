package com.learning.dsa.strings;

public class ReverseAString {

    static String reverseString2(String input) {
        String reversedStr = "";
        for (int i = input.length() - 1; i >= 0; i--) {
            reversedStr += input.charAt(i);
        }
        System.out.println("Reversed String : " + reversedStr);
        return reversedStr;
    }

    static String reverseAString(String input) {
        int inpLength = input.length();

//        char arr[] = input.toCharArray();
//        for (int i = 0; i < inpLength - 1 - i; i++) {
//            char temp = arr[i];
//            arr[i] = arr[inpLength - 1 - i];
//            arr[inpLength - 1 - i] = temp;
//        }

        int j = inpLength - 1;
        char arr[] = input.toCharArray();
        for (int i = 0; i < j; i++, j--) {
            char temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        System.out.println("Reversed String : " + String.valueOf(arr));
        return String.valueOf(arr);
    }

    public static void main(String[] args) {
        reverseAString("raghavendra");
        reverseString2("raghavendra");
        reverseString2("my name is raghav");
        reverseString2("virat hits six");
        reverseString2("mynameisraghav");
    }
}
