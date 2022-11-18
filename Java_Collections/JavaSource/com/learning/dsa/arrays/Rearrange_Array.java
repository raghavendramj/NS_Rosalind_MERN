package com.learning.dsa.arrays;

public class Rearrange_Array {


    public static boolean linearSearch(int[] inputArray, int numberToFind) {
        for (int i = 0; i < inputArray.length; i++) {
            if (inputArray[i] == numberToFind) {
                return true;
            }
        }
        return false;
    }

    public static int[] rearrange(int[] arr) {

        int[] retarr = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            boolean ispresent = linearSearch(arr, i);

            if (ispresent) {
                retarr[i] = i;
            } else {
                retarr[i] = -1;
            }
        }

        return retarr;
    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        int[] arr = {-1, -1, 6, 1, -1, 3, 2, -1, 4, -1};
        int[] output = rearrange(arr);
        System.out.println("Output is ");

        for (int i = 0; i < output.length; i++) {
            System.out.print(output[i] + " ");
        }
    }

}
