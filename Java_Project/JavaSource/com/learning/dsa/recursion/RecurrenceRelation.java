package com.learning.dsa.recursion;

public class RecurrenceRelation {

    // 6 -> 1 + 2 + 3 + 4 + 6

    static int sum(int number) {
        int result = 0;
        for (int i = number; i > 0; i--) {
            result = result + i;
        }
        return result;
    }

    static int sumByFormula(int number) {
        return (number * (number + 1)) / 2;
    }

    static int sumByRecursion(int number) {
        if (number == 1)
            return number;

        return number + sumByRecursion(number - 1);
    }

    static int findSumOfAllDigitsOIterative(int number) {
        int temp = number;
        int sum = 0;
        while (temp > 0) {
            int remainder = temp % 10;
            sum = sum + remainder;
            temp = temp / 10;
        }
        return sum;
    }

    static int findSumOfAllDigitsRecursive(int number) {

        if (number <= 0)
            return 0;

        return number % 10 + findSumOfAllDigitsOIterative(number / 10);

    }

    public static void main(String[] args) {

        System.out.println("findSumOfAllDigitsOIterative : " + findSumOfAllDigitsOIterative(28));
        System.out.println("findSumOfAllDigitsRecursive : " + findSumOfAllDigitsRecursive(28));
//        System.out.println("\n------------------------------ \n");
//
//        System.out.println("Iterative Solution : " + sum(10));
//        System.out.println("By Formula Solution : " + sumByFormula(10));
//        System.out.println("By sumByRecursion Solution : " + sumByRecursion(10));
//
//        System.out.println("\n------------------------------ \n");
//        System.out.println("Iterative Solution : " + sum(20));
//        System.out.println("By Formula Solution : " + sumByFormula(20));
//        System.out.println("By sumByRecursion Solution : " + sumByRecursion(20));
    }
}
