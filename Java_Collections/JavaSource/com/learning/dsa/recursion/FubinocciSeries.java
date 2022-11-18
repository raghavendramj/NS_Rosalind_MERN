package com.learning.dsa.recursion;

public class FubinocciSeries {

    static int fubinocciNumberIterative(int number) {

        if (number <= 1)
            return number;

        int fib1 = 0, fib2 = 1, fib3 = 0;

        for (int i = 2; i <= number; i++) {
            fib3 = fib2 + fib1;
            fib1 = fib2;
            fib2 = fib3;
        }
        return fib3;
    }

    static int fubinocciNumberRecursive(int number) {
        if (number <= 1)
            return number;
        return fubinocciNumberRecursive(number - 1) + fubinocciNumberRecursive(number - 2);
    }

    public static void main(String[] args) {
//        System.out.println("Fibonacci Number :: Iterative : " + fubinocciNumberIterative(70));
        System.out.println("Fibonacci Number :: Recursive : " + fubinocciNumberRecursive(5));
    }
}
