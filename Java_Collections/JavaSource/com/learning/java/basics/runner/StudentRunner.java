package com.learning.java.basics.runner;

import com.learning.java.basics.model.Student;

public class StudentRunner {
    public static void main(String[] args) {
        Student student1 = new Student(1, "Raghav", "raghav@gmail.com");
        student1.display();

//        Long marks = student1.getMarks();
//        System.out.println("Marks of the student : "+ marks);

        Student student2 = new Student(2, "Keshav", "keshav@gmail.com");
        student2.display();

        Student student3 = new Student(3, "Madhav", "madhav@gmail.com");
        student3.display();
    }
}
