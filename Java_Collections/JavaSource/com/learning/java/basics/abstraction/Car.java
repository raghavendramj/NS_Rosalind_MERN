package com.learning.java.basics.abstraction;

abstract class Vehicle {
    abstract void move();

    void printDetails() {
        System.out.println("This is the details of the vehicle");
    }
}

class Bike extends Vehicle {

    @Override
    void move() {
        System.out.println("I can move with 2 wheels");
    }
}

class Car extends Vehicle {
    @Override
    void move() {
        System.out.println("I can move with 4 wheels");
    }
}

class Runner {
    public static void main(String[] args) {
        Bike bike = new Bike();
        bike.move();
        bike.printDetails();
        System.out.println("---------------------------------");
        Car car = new Car();
        car.move();
        car.printDetails();
    }
}