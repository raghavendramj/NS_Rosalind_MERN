package com.learning.dsa.number.thoery;

public class Factorial {

    static int findFact(int number) {

        int result = 1;
//        for (int i = number; i >= 2; i--) {
//            result = result * i;
//        }

        for (int i = 1; i <= number; i++) {
            result = result * i;
        }

        return result;

    }

    public static void main(String[] args) {
        System.out.println("Factorial of 6 is " + findFact(6));

    }
}
