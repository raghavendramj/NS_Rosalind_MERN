package com.learning.dsa.recursion;

public class Factorial {

    static int factorial(int number) {
        if (number == 1)
            return number;
        else
            return number * factorial(number - 1);
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5 : " + factorial(5));
    }
}
