package com.learning.dsa.arrays;

public class PrintUniqueNumbers {

    //public static <return type>
    public static int[] getUniqueValues(int[] arr) {

        int[] returnArray = new int[arr.length];
        int k = 0;

        for (int i = 0; i < arr.length; i++) {

            int element = arr[i];

            //Check element is present in the output array or not.
            boolean flag = false;
            for (int j = 0; j < returnArray.length; j++) {
                if (returnArray[i] == element) {
                    flag = true;
                }
            }

            //if not then add it into the array.
            if (!flag) {
                returnArray[k] = element;
                k++;
            }
        }

        return returnArray;
    }
}
