package com.learning.dsa;

public class RemoveDuplicates {

    public static void main(String[] args) {
        //Base Case
        System.out.println("Input [1] " + removeDuplicates(new int[]{1}));
        System.out.println("Input [] " + removeDuplicates(new int[]{}));
        System.out.println("Input [1, 1, 2, 2, 2, 2] " + removeDuplicates(new int[]{1, 1, 2, 2, 2, 2}));

    }

    public static int removeDuplicates(int[] nums) {

        int len = nums.length;
        //1, 1, 2, 2, 2, 2
        //1, 2, 2, 2, 2, _
        //1, 2, 2, 2, _, _
        //1, 2, 2, _, _, _
        //1, 2, _, _, _, _
        //return 2;
        if (len == 0 || len == 1) {
            return len;
        } else {
            int temp[] = new int[len];
            int uniqueElements = 0;

            for (int i = 0; i < len - 1; i++) {
                //arr[0], arr1]
                //1, 1, 2, 2, 2, 2
                //compare 1 == 1
                if (nums[i] != nums[i + 1]) {
                    temp[uniqueElements] = nums[i];
                    uniqueElements++; // uniqueElements = uniqueElements + 1;
                }
            }
            temp[uniqueElements] = nums[len - 1];
            uniqueElements++;

            return uniqueElements;
        }
    }
}
