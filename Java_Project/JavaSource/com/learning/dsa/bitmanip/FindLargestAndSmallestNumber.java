package com.learning.dsa.bitmanip;

public class FindLargestAndSmallestNumber {

    static void findNumber(int arr[]) {
        int large = Integer.MIN_VALUE;
        int small = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > large) {
                large = arr[i];
            }
            if (arr[i] < small) {
                small = arr[i];
            }
        }
        System.out.println("Smallest Element : " + small);
        System.out.println("Largest Element : " + large);
    }
    public static void main(String[] args) {
        int arr[] = {1, 5, 2, 8, 3, 7, 9, 4};
        findNumber(arr);
    }
}
