package com.learning.java.basics;

public class ReadArguments {
    public static void main(String[] args) {

        for (int i = 0; i < args.length; i++) {
            String argument = args[i];
            System.out.println("Argument : " + argument);
        }
    }

}
