package com.learning.dsa.number.thoery;

public class FindGCDTwoNumbers {

    static int findGCD(int num1, int num2) {
        int gcd = 0;
        //i-> 1 to 36
        //i-> 1 to 60
        // i -> 37
        for (int i = 1; i <= num1 && i <= num2; i++) {

            if (num1 % i == 0 && num2 % i == 0)
                gcd = i;
        }
        System.out.println(String.format("GCD of %s and %s is %s", num1, num2, gcd));

        return gcd;
    }

    public static void main(String[] args) {
        findGCD(36, 60);
    }
}
