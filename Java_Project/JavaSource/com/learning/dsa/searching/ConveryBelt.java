package com.learning.dsa.searching;

public class ConveryBelt {

    //https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
    static boolean isCorrectBoatWeight(int mid, int arr[], int D) {
        int sum = 0;
        int days = 1;

        for (int i = 0; i < arr.length; i++) {

            if (sum + arr[i] <= mid) {
                sum += arr[i];
            } else {
                days++; //increment day
                sum = arr[i]; // RESET the sum after every day

            }
        }
        if (days <= D)
            return true;
        else
            return false;
    }

    public int shipWithinDays(int[] weights, int days) {
        int sum = 0;
        int max = 0;
        for (int each : weights) {
            if (each > max) {
                max = each;
            }
            sum += each;
        }
        int low = max;
        int high = sum;

        int ans = 0;

        while (low <= high) {
            int mid = (low + high) / 2;
            if (isCorrectBoatWeight(mid, weights, days)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}