package com.learning.dsa;

public class PatternPyramid {

    /**
     * Company Asked :- Walmart
     * @param n
     */
    public static void printPyramid(int n) {
        for (int i = 1; i <= n; i++) {

            for (int spacesRequired = n - i; spacesRequired > 0 ; spacesRequired--) {
                System.out.print(" ");
            }

            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

    }

    public static void main(String[] args) {
        printPyramid(3);
    }
}
