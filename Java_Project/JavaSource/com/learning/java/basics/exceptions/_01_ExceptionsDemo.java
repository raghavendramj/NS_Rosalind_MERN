package com.learning.java.basics.exceptions;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class _01_ExceptionsDemo {

    //Checked Exceptions
    // 1. FileNotFound
    // 2. ClassNotFound
    // 3. IOException
    public static void readFile() {
        try {
            FileReader fileReader = new FileReader("file.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Error occurred : " + e.getMessage());
        }
    }

    public static void show() {
        sayHello(null);
    }

    //UnChecked/Runtime Exception
    // 1.NullPointer
    // 2.Arithmetic
    // 3.IllegalArgument
    // 4.IndexOutOfBound
    // 5.IllegalState

    public static void sayHello(String name) {
        try {
            System.out.println("Name uppercased value is : " + name.toUpperCase());
        } catch (NullPointerException npe) {
            System.out.println("Exception occurred : " + npe.getMessage());
        }
    }

    public static void main(String[] args) {
        show();
        readFile();
    }
}
