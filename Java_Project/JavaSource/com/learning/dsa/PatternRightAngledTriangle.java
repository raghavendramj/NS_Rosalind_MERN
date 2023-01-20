package com.learning.dsa;

public class PatternRightAngledTriangle {
    public static void main(String[] args) {
        printPattern(5);
    }

    private static void printPattern(int number) {
        for (int i = 1; i <= number; i++) {

            int j = 1;
            //i= 1,
            while (j <= i) {
                System.out.print(" "+ j);
                j++;
            }
            System.out.println();

            //i-> 1, j->1, j<=i, 1<=1 => 1
            //i-> 1, j->2, j<=i, 1<=2

            //i-> 2, j->1, j<=i, 1<=2 => 1
            //i-> 2, j->2, j<=i, 2<=2 => 2
            //i-> 2, j->3, j<=i, 2<=3

            //i-> 3, j->1, j<=i, 1<=2 => 1
            //i-> 3, j->2, j<=i, 2<=2 => 2
            //i-> 3, j->3, j<=i, 3<=3 => 3
            //i-> 3, j->4, j<=i, 4<=3
        }
    }
}
