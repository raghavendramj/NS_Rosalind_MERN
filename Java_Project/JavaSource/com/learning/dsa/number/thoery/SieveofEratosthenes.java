package com.learning.dsa.number.thoery;

import java.util.ArrayList;
import java.util.List;

public class SieveofEratosthenes {

    static boolean isPrime(int number) {

        if (number == 1 || number == 2)
            return true;

        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    static List<Integer> findAllPrimesTillTheNumber(int number) {

        List<Integer> primes = new ArrayList<>();
        for (int i = 1; i <= number ; i++) {
            if(isPrime(i)){
                primes.add(i);
            }
        }

        return primes;
    }

    public static void main(String[] args) {
        System.out.print("Following are the prime numbers " + findAllPrimesTillTheNumber(30));
    }

}
