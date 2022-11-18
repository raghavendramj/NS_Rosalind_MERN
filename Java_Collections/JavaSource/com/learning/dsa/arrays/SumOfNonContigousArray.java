package com.learning.dsa.arrays;

public class SumOfNonContigousArray {


    static int findMaxSum(int arr[]) {

        int finalSum = Integer.MIN_VALUE;
        int currentSum = 0;

        for (int i = 0; i < arr.length; i++) {
            currentSum += arr[i];

            finalSum = Math.max(finalSum, currentSum);

            if (finalSum > currentSum) {
                currentSum = finalSum;
            }

            if (currentSum < 0) {
                currentSum = 0;
            }
        }
        return finalSum;
    }

    public static void main(String[] args) {
        System.out.println("Max Sum : " + findMaxSum(new int[]{15, -2, 2, -8, 1, 7, 10, 23}));
        System.out.println("Max Sum : " + findMaxSum(new int[]{-4, -2, -1, -5}));
        System.out.println("Max Sum : " + findMaxSum(new int[]{-4, 1, -5, 8}));
        System.out.println("Max Sum : " + findMaxSum(new int[]{1, 2, 3, -2, 5}));
    }
}
