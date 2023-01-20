package com.learning.dsa.arrays;

public class ReverseAnArray {

    public static int[] reverse(int arr[]) {
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {

            //Swap Value
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6};
        int[] result = reverse(arr);

        System.out.println("Reversed elements : ");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i] + " ");
        }
    }
}
