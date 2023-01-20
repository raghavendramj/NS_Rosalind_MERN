package com.learning.dsa.number.thoery;

public class SumOfGCD {

    static int findGCD(int num1, int num2) {
        int gcd = 0;
        for (int i = 1; i <= num1 && i <= num2; i++) {
            if (num1 % i == 0 && num2 % i == 0)
                gcd = i;
        }
        //System.out.println(String.format("GCD of %s and %s is %s", num1, num2, gcd));
        System.out.println("GCD of " + num1 + " and " + num2 + " is " + gcd);
        return gcd;
    }

    static int sumOfGCDs(int number) {
        int sumOfGCDs = 0;
        for (int i = 1; i <= number; i++) {
            int gcd = findGCD(i, number);
            //sumOfGCDs += gcd;
            sumOfGCDs = sumOfGCDs + gcd;
        }
        System.out.println("Sum of All GCDs is " + sumOfGCDs);
        return sumOfGCDs;
    }

    public static void main(String[] args) {

        sumOfGCDs(12);
    }
}
