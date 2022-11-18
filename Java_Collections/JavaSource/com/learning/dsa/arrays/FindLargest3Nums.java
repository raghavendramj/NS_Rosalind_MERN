package com.learning.dsa.arrays;

import java.util.Arrays;

public class FindLargest3Nums {

    static void largest3NumsWithNLogNTC(int arr[]) {
        Arrays.sort(arr);

        int len = arr.length;

        int count = 0;
        for (int i = 0; i < len; i++) {
            if (count < 3) {
                System.out.print(arr[len - 1 - i] + " ");
                count++;
            } else {
                break;
            }
        }
    }

    static void largest3NumsWithNTC(int arr[]) {
        int first, second, third;
        first = second = third = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > first) {
                third = second;
                second = first;
                first = arr[i];
            } else if (arr[i] > second) {
                third = second;
                second = arr[i];
            } else {
                third = arr[i];
            }
        }

        System.out.println(first + " " + second + " " + third);
    }

    public static void main(String[] args) {
        largest3NumsWithNTC(new int[]{1, 4, 2, 6, 5});
        largest3NumsWithNLogNTC(new int[]{1, 4, 2, 4, 5});
    }
}
