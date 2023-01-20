package com.learning.ds.dp;

import java.util.HashMap;
import java.util.Map;

public class Fibonacci {

    // 0 1 1 2 3 5 8 13 21 24 45......
    // 0 1 2 3 4 5 6 7  8  9  10

    public static void main(String[] args) {
        Fibonacci fibonacci = new Fibonacci();
        int number = 100;
        System.out.println("fibonacciNumberMemoized -> Fibonacci Number(" + number + ") :- " + fibonacci.fibonacciNumberMemoized(number, new HashMap<>()));
        System.out.println("fibonacciTabulation -> Fibonacci Number(" + number + ") :- " + fibonacci.fibonacciTabulation(number));
    }

    //Recursive
    int fibonacciNumber(int number) {
        if (number <= 2) {
            return 1;
        }
        return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
    }

    //Recursive -> DP :- Top down approach -> Memoized
    long fibonacciNumberMemoized(long number, Map<Long, Long> memo) {
        if (number <= 2) {
            return 1;
        }
        if (memo.containsKey(number)) {
            return memo.get(number);
        }

        long result = fibonacciNumberMemoized(number - 1, memo) + fibonacciNumberMemoized(number - 2, memo);
        memo.put(number, result);
        return memo.get(number);
    }

    long fibonacciTabulation(int number) {
        // 0 1 1 2 3 8 13 21 34 45...
        // 0 1 2 3 4 5 6  7  8  9  10 11
        long fib[] = new long[number + 1];
        fib[0] = 0;
        fib[1] = 1;
        for (int i = 2; i <= number; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[number];
    }
}
