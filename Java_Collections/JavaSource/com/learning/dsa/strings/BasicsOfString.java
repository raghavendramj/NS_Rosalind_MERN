package com.learning.dsa.strings;

public class BasicsOfString {


    public static void main(String[] args) {
        //<ReferenceType : String> <reference variable name> = "<sequence of chars> raghavendra";
//        String name = "raghavendra";
//        String name_modified = "raghavendra_mj";
//        System.out.println("Hashcode name : "+ name.hashCode());
//        System.out.println("Hashcode name_modified : "+ name_modified.hashCode());

//        String is immutable -> once you create can't be changed!
//
//        String name = "raghavendra"; // ['r', 'a', 'g', 'h', 'a', 'v', 'e', 'n', 'd', 'r', 'a'];
//        // Strings in Java are Objects that are backed internally by a char array.
//        // Since arrays are immutable(cannot grow), Strings are immutable as well
//        System.out.println("Hashcode name : " + name.hashCode());
//
//        name = "raghavendra_mj";
//        System.out.println("Hashcode name : " + name.hashCode());

        BasicsOfString object1 = new BasicsOfString();
        BasicsOfString object2 = new BasicsOfString();

        String technology = new String("Java");
        String tech = new String("Java");

        System.out.println("object1 : " + object1.hashCode());
        System.out.println("object2 : " + object2.hashCode());

        System.out.println("technology : " + technology.hashCode());
        System.out.println("tech : " + tech.hashCode());
    }
}
