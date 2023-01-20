package com.learning.java.basics;

public class BinarySearch {
    //Member variable/instance variable
    int arr[] = new int[5];
    int numberToSearch;

    //Default constructor
    public BinarySearch() {
    }

    //Parameterized Constructor
    public BinarySearch(int number) {
        this.numberToSearch = number;
    }

    //Starting point of the execution
    public static void main(String[] args) {

        BinarySearch search1 = new BinarySearch(); //Stored in heap Memory
        BinarySearch search2 = new BinarySearch(10); //Stored in heap Memory
    }

    //Member Function
    public void printNumbers() {
        for (int i = 0; i < arr.length; i++) {
            System.out.println("Each Number  : " + arr[i]);
        }
    }

}
