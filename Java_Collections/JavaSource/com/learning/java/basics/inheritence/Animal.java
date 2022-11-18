package com.learning.java.basics.inheritence;

class Animal {
    public String foodType = "Non-Vegeterian";

    //Access Modifier + Return Type + name (parameter type parametername)
    //void -> won't return anything to the user.
    public void eatFood() {
        System.out.println("Eating the food!");
    }
}

class Tiger extends Animal {

}

class Lion extends Animal {

}

class Runner {

    public static void main(String[] args) {
        Tiger tiger = new Tiger();
        tiger.eatFood();
        System.out.println("Food type :  " + tiger.foodType);


        Lion lion = new Lion();
        lion.eatFood();
        System.out.println("Food type :  " + lion.foodType);
    }
}