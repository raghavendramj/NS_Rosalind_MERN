package com.learning.java.basics.polymorphism;

public class AddNumber {

    public static void main(String[] args) {
        AddNumber object = new AddNumber();
        System.out.println("Sum of 10, 20 is " + object.add(10, 20));
        System.out.println("Sum of 10, 20 is " + object.add(10l, 20l));
        System.out.println("Sum of 10, 20 + 30 is " + object.add(10, 20, 30));


        //invoking the function from main/any method.
        //function name(param variable,...);
        int firstNumber = 10;
        int secondNumber = 20;
        int result = object.add(firstNumber, secondNumber);
        System.out.println("Result : " + result);
    }

    //Function
    //access modifier -> public, private, default, protected
    //return type -> int, short, long, any data-type
    //function-name -> add
    //parameters -> param data type -> int param variable name -> a
    public int add(int a, int b) {
        int result = a + b;
        return result;
    }

    public int add(long a, long b) {
        return (int) (a + b);
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
