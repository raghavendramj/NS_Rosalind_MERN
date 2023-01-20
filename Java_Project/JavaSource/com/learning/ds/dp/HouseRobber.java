package com.learning.ds.dp;

import java.util.Arrays;

public class HouseRobber {

    //{6, 7, 1, 3, 8, 2, 4};
    //Recursive
    static int maxStolenValue(int houseValues[], int n) {
        //Base condition - No houses
        if (n < 0) {
            return 0;
        }

        //Only one house
        if (n == 0) {
            return houseValues[n];
        }

        int firstPick = houseValues[n] + maxStolenValue(houseValues, n - 2);
        int nextPick = maxStolenValue(houseValues, n - 1);

        int maxValue = Math.max(firstPick, nextPick);
        return maxValue;
    }

    static int maxStolenValueMemoized(int houseValues[], int n, int dp[]) {
        //Base condition - No houses
        if (n < 0) {
            return 0;
        }

        //Only one house
        if (n == 0) {
            return houseValues[n];
        }

        if (dp[n] != -1) {
            return dp[n];
        }

        int firstPick = houseValues[n] + maxStolenValue(houseValues, n - 2);
        int nextPick = maxStolenValue(houseValues, n - 1);

        int maxValue = Math.max(firstPick, nextPick);
        dp[n] = maxValue; //Memoizing

        return dp[n];
    }

    static int maxStolenValueTabulation(int houseValues[], int n) {
        //Base condition - No houses
        if (n < 0) {
            return 0;
        }

        //Only one house
        if (n == 0) {
            return houseValues[n];
        }

        if (n == 1) {
            return Math.max(houseValues[0], houseValues[1]);
        }

        int dp[] = new int[n + 1];
        Arrays.fill(dp, -1);
        dp[0] = houseValues[0];
        dp[1] = houseValues[1];

        for (int i = 2; i <= n; i++) {
            //{6, 7, 1, 3, 8, 2, 4};
            dp[i] = Math.max(houseValues[i] + dp[i - 2], dp[i - 1]);
        }
        return dp[n];
    }

    public static void main(String[] args) {
        int arr[] = {6, 7, 1, 3, 8, 2, 4};
        int result = maxStolenValue(arr, arr.length - 1);
        System.out.println("Recursion :- Maximum stolen value :- " + result);

        int dp[] = new int[arr.length + 1];
        Arrays.fill(dp, -1);
        int resultMemoized = maxStolenValueMemoized(arr, arr.length - 1, dp);
        System.out.println("Memoized :- Maximum stolen value :- " + resultMemoized);

        int resultTabulation = maxStolenValueTabulation(arr, arr.length - 1);
        System.out.println("Memoized :- Maximum stolen value :- " + resultTabulation);
    }
}
