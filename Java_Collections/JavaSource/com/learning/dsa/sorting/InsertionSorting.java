package com.learning.dsa.sorting;

public class InsertionSorting {

    public static void printElements(int arr[]) {

        System.out.print("Elements in the array :- ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static int[] insertionSort(int arr[]) {
        int len = arr.length;

        for (int i = 1; i < len; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            if (j + 1 != i) {
                arr[j + 1] = key;
            }

        }
        return arr;
    }


    public static void main(String[] args) {
        //int arr[] = {7, 2, 4, 3, 20, 15};
        int arr[] = {12, 31, 25, 8, 32, 17};
        int result[] = insertionSort(arr);
        printElements(result);
    }
}
