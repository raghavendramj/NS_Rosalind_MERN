package com.learning.dsa.arrays;

public class FindPairSum {

    //Input -> array, sum
    //Output -> array -> pair sum
    //Access modifier | return type | function name | (parameters -> param type param variable)
    public static int[] findPairSum(int arr[], int pairSum) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == pairSum) {
                    int result[] = {arr[i], arr[j]};
                    System.out.println("Pair sum for " + pairSum + " is :- " + arr[i] + ", " + arr[j]);
                    return result;
                }

            }
        }
        return new int[]{};
    }

    //Time complexity = O(n)
    public static int[] findPairSumSortedArray(int arr[], int pairSum) {
        int i = 0;
        int j = arr.length - 1;

        while (i < j) {

            int sum = arr[i] + arr[j];
            if (sum == pairSum) {
                System.out.println("Pair sum for " + pairSum + " is :- " + arr[i] + ", " + arr[j]);
                return new int[]{arr[i], arr[j]};
            }
            if (sum > pairSum) {
                j--;
            } else {
                i++;
            }
        }
        return new int[]{};
    }

    //Access modifier | return type | function name | (parameters -> param type param variable)
    public static void main(String[] args) {
        findPairSum(new int[]{10, 20, 35, 50, 75, 80}, 70);
        findPairSum(new int[]{10, 20, 35, 50, 75, 80}, 80);
        findPairSum(new int[]{10, 20, 35, 50, 75, 80}, 55);
        findPairSumSortedArray(new int[]{2, 3, 5, 8, 9, 10, 11}, 14);
    }
}
