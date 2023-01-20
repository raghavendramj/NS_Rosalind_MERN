package com.learning.dsa.searching;

public class LinearSearch {

    static int linearSearch(int arr[], int numberToSearch) {
        int resultIndex = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == numberToSearch) {
                resultIndex = i;
                return resultIndex;
            }
        }
        return resultIndex;
    }

    public static void main(String[] args) {
        int arr1[] = {1, 2, 3, 4, 5};
        System.out.println("Index of 4 is : "+ linearSearch(arr1, 4));
    }
}
