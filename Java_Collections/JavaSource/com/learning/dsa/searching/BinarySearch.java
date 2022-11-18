package com.learning.dsa.searching;

public class BinarySearch {

    public static int binarySearchIterative(int arr[], int elementToSearch) {
        int index = -1;

        int high = arr.length - 1;
        int low = 0;

        while (low <= high) {
            int mid = (high + low) / 2;

            if (arr[mid] == elementToSearch) {
                index = mid;
                return index;
            }

            if (elementToSearch < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return index;
    }

    public static int binarySearchRecursive(int arr[], int elementToSearch, int low, int high) {

        int mid = (high + low) / 2;

        //Base Condition
        if (arr[mid] == elementToSearch) {
            return mid;
        }

        if (arr[mid] < elementToSearch)
            return binarySearchRecursive(arr, elementToSearch, mid + 1, high);
        else
            return binarySearchRecursive(arr, elementToSearch, low, mid - 1);
    }

    public static void main(String[] args) {
        int arr1[] = {1, 2, 3, 4, 5};
        System.out.println("Index of 4 is : " + binarySearchIterative(arr1, 4));
        System.out.println("Index of 4 is : " + binarySearchRecursive(arr1, 4, 0, arr1.length));
    }
}
