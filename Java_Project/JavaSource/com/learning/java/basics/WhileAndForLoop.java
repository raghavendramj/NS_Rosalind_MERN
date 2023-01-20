package com.learning.java.basics;

public class WhileAndForLoop {

    public static void whileLoop(int arr[]) {
        int end = arr.length;
        int start = 0;
        while (start < end) {
            System.out.println("start = " + start + ", " + "Current Value : " + arr[start]);
            start++;
        }
    }

    public static void doWhileLoop(int arr[]) {
        int end = arr.length;
        int start = 0;
        do {
            System.out.println("start = " + start + ", " + "Current Value : " + arr[start]);
            start++;
        } while (start < end);
    }

    public static void forEachLoop(int arr[]) {
        for (int eachValue : arr) {
            System.out.println("Current Value : " + eachValue);
        }
    }

    public static void forLoopExample(int arr[]) {

        //for(initialization condtion; testing condition; increment/decrement) {
        // statement;
        //}

        int end = arr.length;
        for (int start = 0; start < end; start++) {
            System.out.println("start = " + start + ", " + "Current Value : " + arr[start]);
        }

        //5, 1, 2, 7, 9, 6
        //start = 0, end = 6
        //start = 0, 0 < 6, -> Current Value : 5 -> start++
        //start = 1, 1 < 6, -> Current Value : 1 -> start++
        //start = 2, 2 < 6, -> Current Value : 2 -> start++
        //start = 3, 3 < 6, -> Current Value : 7 -> start++
        //start = 4, 4 < 6, -> Current Value : 9 -> start++
        //start = 5, 5 < 6, -> Current Value : 6 -> start++
        //start = 6, 6 < 6, -> BREAK OUT OF THE LOOP

    }

    public static void main(String[] args) {

        int array[] = {5, 1, 2, 7, 9, 6};
        forLoopExample(array);
        System.out.println("-------------------------");
        whileLoop(array);
        System.out.println("-------------------------");
        doWhileLoop(array);
        whileLoop(new int[]{});
        //doWhileLoop(new int[]{}); // Will throw exception
    }
}
