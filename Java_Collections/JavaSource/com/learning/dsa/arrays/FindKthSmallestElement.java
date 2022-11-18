package com.learning.dsa.arrays;

public class FindKthSmallestElement {

    public static int findKthSmallestElement(int arr[], int k) {
        int sortedArray[] = bubbleSort(arr);
        return sortedArray[k - 1];
    }

    public static int[] bubbleSort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i; j <= n - 1; j++) {
                if (arr[j] < arr[i]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    public static void printElements(int arr[]) {

        System.out.print("Elements in the array :- ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }


    public static void main(String[] args) {
        int inp[] = {7, 10, 4, 3, 20, 15};
        int[] sortedElements = bubbleSort(inp);
        printElements(sortedElements);

        System.out.println("Kth Smallest Element(3) :- "+ findKthSmallestElement(inp, 3));
        System.out.println("Kth Smallest Element(3) :- "+ findKthSmallestElement(new int[]{7, 10, 4, 20, 15}, 4));
    }
}
