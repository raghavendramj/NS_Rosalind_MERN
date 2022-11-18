package com.learning.dsa.arrays;

public class RearrangeArray {

    static void rearrange(int arr[]){

        //Extra Space
        int out[] = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            out[i] = arr[arr[i]];
        }

        for (int i = 0; i < out.length; i++) {
            System.out.print(out[i] + " ");
        }
        System.out.println();

    }

    public static void main(String[] args) {
        rearrange(new int[]{4, 2, 3, 0, 1});
    }
}
