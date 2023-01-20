package com.learning.java.basics;

public class Functions {

    static void welcome(String a){
        System.out.println("Welcome to the class "+ a);
    }

    public static void main(String[] args) {
        String name1 = "Raghavendra";
        welcome(name1);

        String name2  = "Abhijeet";
        welcome(name2);

        String name3 = "Aldrin";
        welcome(name3);
    }
}
