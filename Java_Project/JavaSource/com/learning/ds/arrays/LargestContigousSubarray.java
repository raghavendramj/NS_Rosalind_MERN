package com.learning.ds.arrays;

//Largest Sum Contiguous Subarray (Kadane’s Algorithm)
//Given an array arr[] of size N. The task is to
//find the sum of the contiguous subarray within a arr[] with the largest sum.
//Input :- {-2, -3, 4, -1, -2, 1, 5, -3}

public class LargestContigousSubarray {

    public static void main(String[] args) {
        int arr1[] = {-2, -3, 4, -1, -2, 1, 5, -3};

        //Answer :- { 4, -1, -2, 1, 5 } => 7
        solutionUsha();
    }

    static void solutionUsha() {
        int nums[] = {-2, -3, 4, -1, -2, 1, 5, -3};
        int sum = 0;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum > max) {
                max = sum;
            }
            if (sum < 0) {
                sum = 0; //resetting it..  MAIN PART!
            }
        }
        System.out.println("Largest Contigous Subarray sum :- "+ max);
    }

    private int[] findLargestContigousSubArray(int arr[]) {


        return new int[4];
    }
}
