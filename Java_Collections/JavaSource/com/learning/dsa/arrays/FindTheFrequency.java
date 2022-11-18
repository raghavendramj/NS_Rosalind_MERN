package com.learning.dsa.arrays;

public class FindTheFrequency {

    public static int findFreq(int arr[], int x) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (x == arr[i])
                count++;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println("The Count of 1 is : " + findFreq(new int[]{1, 1, 1, 1, 1}, 1));
        System.out.println("The Count of 3 is : " + findFreq(new int[]{2, 1, 3, 1, 4, 1, 3, 1, 3, 1, 3}, 3));
    }
}
