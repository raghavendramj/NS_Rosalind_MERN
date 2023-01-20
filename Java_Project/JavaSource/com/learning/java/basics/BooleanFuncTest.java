package com.learning.java.basics;

public class BooleanFuncTest {

    static boolean isGreaterThan5(int number){
        boolean isGreater = false;
        if(number > 5)
            isGreater = true;
        else
            isGreater = false;

        return isGreater;
    }

    public static void main(String[] args) {
        System.out.println("isGreaterThan5(6) "+ isGreaterThan5(6));
        System.out.println("isGreaterThan5(1) "+ isGreaterThan5(1));
    }
}
