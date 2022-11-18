package com.learning.java.basics.model;

public class Student {
    private int id;
    private String name;
    private String email;
    private long marks;

    public Student(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public void display() {
        System.out.println("Student id : " + this.id + " name : " + this.name + " email : " + this.email);
    }

    Long getMarks() {
        this.marks = 45;
        return this.marks;
    }

    protected String getStudentInfo(){
        String output = "Student id : " + this.id + " name : " + this.name + " email : " + this.email;
        return output;
    }
}
