package com.learning.java.basics.polymorphism;

class Animal {
    public void eatFood() {
        System.out.println("Eating Food");
    }
}

class Tiger extends Animal {
    public void eatFood() {
        System.out.println("Eating Non Vegetarian Food");
    }
}

class Giraffe extends Animal {
    public void eatFood() {
        System.out.println("Eating Vegetarian Food");
    }
}

public class Overriding {
    public static void main(String[] args) {
        Tiger tiger = new Tiger();
        tiger.eatFood();

        Giraffe giraffe = new Giraffe();
        giraffe.eatFood();
    }
}
