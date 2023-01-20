package com.learning.dsa.sorting;

public class Sort0s1s2s {
     /*
       Sort an array of 0s, 1s and 2s
       Difficulty Level : Medium

       Input: {0, 1, 2, 0, 1, 2}
       Output: {0, 0, 1, 1, 2, 2}

       Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
       Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
    */
    static void swap(int i, int j, int arr[]) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static int[] threeWayParition(int arr[]) {
        int start = 0;
        int end = arr.length - 1;
        int mid = 0;

        int middleElement = 1;

        while (mid <= end) {
            if (arr[mid] < middleElement) {
                swap(start, mid, arr);
                start++;
                mid++;
            } else if (arr[mid] > middleElement) {
                swap(end, mid, arr);
                end--;
            } else {
                ++mid;
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        printElements(threeWayParition(new int[]{0, 2, 1, 2, 0}));
        printElements(threeWayParition(new int[]{0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}));
    }

    public static void printElements(int arr[]) {
        System.out.print("Elements in the array :- ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    private static int[] countNums(int[] nums) {
        int len = nums.length;
        int numberOfOnes = 0;
        int numberOfTwos = 0;

        for (int i = 0; i < len; i++) {
            if (nums[i] == 1) numberOfOnes++;
            if (nums[i] == 2) numberOfTwos++;
        }

        int numberOfZeros = len - (numberOfOnes + numberOfTwos);

        //First Way
        int i = 0;
        for (; i < numberOfZeros; i++) {
            nums[i] = 0;
        }
        for (; i < numberOfZeros + numberOfOnes; i++) {
            nums[i] = 1;
        }
        for (; i < numberOfZeros + numberOfOnes + numberOfTwos; i++) {
            nums[i] = 2;
        }

        //Second Way
        for (int j = 0; j < len; j++) {
            if (j < len - (numberOfOnes + numberOfTwos)) {
                nums[j] = 0;
            } else if (j < len - numberOfTwos) {
                nums[j] = 1;
            } else {
                nums[j] = 2;
            }
        }

        return nums;
    }
}
