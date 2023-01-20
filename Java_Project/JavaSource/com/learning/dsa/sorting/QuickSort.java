package com.learning.dsa.sorting;

public class QuickSort {


    public static void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        return 0;
    }


    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.length;
        quickSort(arr, 0, n - 1);
    }
}
