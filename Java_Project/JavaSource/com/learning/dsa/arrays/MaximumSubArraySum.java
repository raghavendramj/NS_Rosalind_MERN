package com.learning.dsa.arrays;

public class MaximumSubArraySum {

    public static int[] maxSumInArray(int arr[], int k) {
        int res[] = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            int tempK = k;
            int j = i;
            int sum = 0;
            while (tempK > 0) {
                if (j > arr.length - 1) {
                    j = 0;
                }
                sum += arr[j];
                j++;
                tempK--;
            }
            res[i] = sum;
            System.out.print(res[i] + " ");
        }
        return res;
    }

    public static void main(String[] args) {

        int arr[] = {6, 4, 3, 4, 1};
        maxSumInArray(arr, 3);

    }
}
