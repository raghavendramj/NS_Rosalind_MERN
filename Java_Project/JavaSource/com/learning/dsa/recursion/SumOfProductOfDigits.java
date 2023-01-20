package com.learning.dsa.recursion;

public class SumOfProductOfDigits {

    public static void main(String[] args) {
        System.out.println("sumOfProdOfDigits of 24, 36 :- " + sumOfProdOfDigits(24, 36));
        System.out.println("sumOfProdOfDigitsRecursive of 24, 36 :- " + sumOfProdOfDigitsRecursive(24, 36));
    }

    // 24 36
    // 6 * 4 => 24
    // 3 * 2 => 6
    // Sum => 30

    static int sumOfProdOfDigits(int num1, int num2) {
        //22 and 36
        int sum = 0;
        while (num1 > 0 && num2 > 0) {
            sum = sum + (num1 % 10) * (num2 % 10);
            num1 = num1 / 10;
            num2 = num2 / 10;
        }
        return sum;
    }

    static int sumOfProdOfDigitsRecursive(int num1, int num2) {
        if (num1 <= 0 || num2 <= 0)
            return 0;
        return (num1 % 10) * (num2 % 10) + sumOfProdOfDigitsRecursive(num1 / 10, num2 / 10);
    }
}
