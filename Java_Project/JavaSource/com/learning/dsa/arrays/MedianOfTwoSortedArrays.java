package com.learning.dsa.arrays;

public class MedianOfTwoSortedArrays {

    static int findMedian(int arr1[], int arr2[]) {

        int len = arr1.length;

        int p1 = 0, p2 = 0;
        int mergedArray[] = new int[arr1.length * 2];
        int resIndex = 0;
        while (p1 < len && p2 < len) {
            if (arr1[p1] <= arr2[p2]) {
                mergedArray[resIndex] = arr1[p1];
                p1 = p1 + 1;
                resIndex = resIndex + 1;
            } else {
                mergedArray[resIndex] = arr2[p2];
                p2 = p2 + 1;
                resIndex = resIndex + 1;
            }
        }

        while (p1 < len) {
            mergedArray[resIndex] = arr1[p1];
            p1 = p1 + 1;
            resIndex = resIndex + 1;
        }

        while (p2 < len) {
            mergedArray[resIndex] = arr2[p2];
            p2 = p2 + 1;
            resIndex = resIndex + 1;
        }

        for (int i = 0; i < mergedArray.length; i++) {
            System.out.print(" " + mergedArray[i] + " ");
        }
        System.out.println();


        len = mergedArray.length;

        if (resIndex % 2 != 0) {
            return mergedArray[len / 2];
        } else {
            int first = mergedArray[len / 2];
            int second = mergedArray[(len / 2) - 1];
            return (first + second) / 2;
        }
    }


    public static void main(String[] args) {
        int ar1[] = {1, 12, 15, 26, 38};
        int ar2[] = {2, 13, 17, 30, 45};
        int median = findMedian(ar1, ar2);
        System.out.println("Median is : " + median);
    }
}
