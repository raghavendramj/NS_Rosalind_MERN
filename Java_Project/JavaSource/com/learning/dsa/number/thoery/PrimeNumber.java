package com.learning.dsa.number.thoery;

public class PrimeNumber {

    static boolean isPrimeNumber(int number) {
        if (number == 1 || number == 2)
            return true;

        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("Is given number a prime number :- " + isPrimeNumber(4));
        System.out.println("Is given number a prime number :- " + isPrimeNumber(10));
        System.out.println("Is given number a prime number :- " + isPrimeNumber(13));
        System.out.println("Is given number a prime number :- " + isPrimeNumber(31));
    }
}
