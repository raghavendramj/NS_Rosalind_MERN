package com.learning.dsa.sorting;

public class MergeSorting {

    //arr -> 6, 5, 12, 10, 9, 1
    //first Call -> [6, 5, 12, 10, 9, 1], 0, 5
    static int[] mergeSort(int arr[], int left, int right) {

        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid); // diving the array -> LEFT
            //mid -> 2 Input for next call -> [ 6, 5, 12] , 0, 2
            //mid -> Input for next call -> [ 6, 5] , 0, 1
            //mid -> Input for next call -> [ 6 ] , 0, 0
            //mid -> Input for next call -> [ 5 ] , 1, 1
            //mid -> Input for next call -> [ 12]  2, 2
            mergeSort(arr, mid + 1, right); // diving the array -> RIGHT
            //Input for next call -> [ 10, 9, 1] , 3, 5
            mergeElements(arr, left, mid, right);
        }


        return arr;
    }

    private static void mergeElements(int[] arr, int left, int mid, int right) {

        int n1 = mid - left + 1;
        int n2 = right - mid;

        int leftArray[] = new int[n1];
        int rightArray[] = new int[n2];

        for (int i = 0; i < n1; i++) {
            leftArray[i] = arr[left + i];
        }

        for (int j = 0; j < n2; j++) {
            rightArray[j] = arr[mid + 1 - j];
        }

        //Merging logic.
        int i = 0, j = 0;
        int k = left;

        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            k++;
        }
        //Copying the remaining elements
        while (i < n1) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }


        while (j < n2) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int arr[] = {12, 11, 13, 5, 6, 7};
        mergeSort(arr, 0, arr.length - 1);
        printElements(arr);
    }

    public static void printElements(int arr[]) {
        System.out.print("Elements in the array :- ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
