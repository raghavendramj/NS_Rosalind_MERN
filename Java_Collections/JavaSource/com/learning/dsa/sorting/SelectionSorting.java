package com.learning.dsa.sorting;

public class SelectionSorting {

    public static void printElements(int arr[]) {
        System.out.print("Elements in the array :- ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }


    static int[] selectionSort(int arr[]) {
        int len = arr.length;

        for (int i = 0; i < len - 1; i++) {
            int min_index = i;
            for (int j = i + 1; j < len; j++) {
                if (arr[j] < arr[min_index]) {
                    min_index = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        int arr[] = {64, 25, 12, 22, 11};
        int result[] = selectionSort(arr);
        printElements(result);
    }

}
