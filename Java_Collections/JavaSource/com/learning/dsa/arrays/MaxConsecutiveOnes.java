package com.learning.dsa.arrays;

public class MaxConsecutiveOnes {


    static int maxConsecOnesCount(int arr[]) {
        int maxCount = 0;
        int currentCount = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 1) {
                while (i < arr.length && arr[i] != 0) {
                    currentCount++;
                    i++;
                }
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                }
                //maxCount = Math.max(currentCount, maxCount);
                currentCount = 0;

            }
        }
        return maxCount;

    }

    public static void main(String[] args) {

        System.out.println("Max consecutive ones are :- " + maxConsecOnesCount(new int[]{1, 1, 0, 1, 1, 1}));

    }
}
