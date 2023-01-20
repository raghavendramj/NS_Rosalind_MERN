package com.learning.java.basics.model;

public class TestStudent {
    public static void main(String[] args) {
        Student studentObject = new Student(1, "Raghav", "raghav@gmail.com");

        Long marks = studentObject.getMarks();
        System.out.println("Marks of the student : "+ marks);


        studentObject.getStudentInfo();
    }
}
