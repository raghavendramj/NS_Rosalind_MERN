package com.learning.java.basics;

public class StaticVsInstance {

    static int staticVar = 20;
    int instanceVar = 10;


    public static void printNumbers() {
        System.out.println("Numbers : [1, 2, 3, 4]");
    }

    public static void main(String[] args) {
        StaticVsInstance instance1 = new StaticVsInstance();
        StaticVsInstance instance2 = new StaticVsInstance();
        StaticVsInstance instance3 = new StaticVsInstance();
        //Object
        StaticVsInstance instance4 = new StaticVsInstance();

        //object name . method name;
        instance3.display();
        printNumbers();



        System.out.println("\n -----------> Instance Variables Demo :: ");

        //object name . variable name;
        instance2.instanceVar = 1002;
        instance4.instanceVar = 250;

        System.out.println("instance1.instanceVar : " + instance1.instanceVar);
        System.out.println("instance2.instanceVar : " + instance2.instanceVar);
        System.out.println("instance3.instanceVar : " + instance3.instanceVar);
        System.out.println("instance4.instanceVar : " + instance4.instanceVar);

        System.out.println("\n -----------> Static Variables Demo :: ");

        instance2.staticVar = 150;
        instance3.staticVar = 6300;

        System.out.println("instance1.staticVar : " + instance1.staticVar);
        System.out.println("instance2.staticVar : " + instance2.staticVar);
        System.out.println("instance3.staticVar : " + instance3.staticVar);
        System.out.println("instance4.staticVar : " + instance4.staticVar);

    }

    public void display() {
        System.out.println("Display Function");
    }
}
