package com.learning.dsa.bitmanip;

public class Amstrrong {

    public static boolean isAmstrongNumber(int number) {
        ///153 -> 153%10 -> 3^3  153/10 -> 15
        //modulus
        int n = number;
        int cubeRootSum = 0;

        while (n > 0) {
            int remainder = n % 10;
            cubeRootSum = cubeRootSum + remainder * remainder * remainder;
            n = n / 10;
        }

        //1st -> 153 % 10 -> 3*3*3 = 27, cubeRootSum => 0 + 27 = 27, n => 153/10 = 15
        //2nd -> 15 % 10 -> 5  => 5*5*5 = 125, cubeRootSum => 27 + 125 = 152, n => 15/10 = 1
        //3rd -> 1 % 10 -> 1  => 1*1*1 = 1, cubeRootSum => 152+1 = 153, n => 1/10 = 0

        //Validation => cubeRootSum=153, number=153, true

        if (cubeRootSum == number) {
            return true;
        }

        return false;
    }

    public static void main(String[] args) {

    }
}
