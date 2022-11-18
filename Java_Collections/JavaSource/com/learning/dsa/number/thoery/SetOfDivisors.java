package com.learning.dsa.number.thoery;

import java.util.ArrayList;
import java.util.List;

public class SetOfDivisors {

    static List<Integer> findAllDivisors(int number) {

        List<Integer> divisors = new ArrayList<>();
        for (int i = 1; i <= number / 2; i++) {
            if(number % i == 0)
                divisors.add(i);
        }
        return divisors;
    }

    public static void main(String[] args) {
        System.out.println("Divisors of the given number is :- "+ findAllDivisors(64));
    }
}
