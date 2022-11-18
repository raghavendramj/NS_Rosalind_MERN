package com.learning.dsa.arrays;

public class SearchElement {

    public static void main(String[] args) {
        //First
        int array[] = {15, 18, 2, 3, 6, 12};

        boolean elementFound = false;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == 67) {
                elementFound = true;
            }
        }

        if (elementFound) {
            System.out.println("Element Found");
        } else {
            System.out.println("Element Not Found");
        }
    }
}
