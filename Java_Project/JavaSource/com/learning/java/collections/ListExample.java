package com.learning.java.collections;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class ListExample {

    public static void main(String[] args) {
//        List<Integer> numbers = new ArrayList<Integer>();

        //Duplicate values, ordering is guaranteed
        List<Integer> numbers = new LinkedList<>();
        numbers.add(10);
        numbers.add(10);
        numbers.add(20);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(40);
        System.out.println("numbers  : "+ numbers);


        Iterator<Integer> integerIterator = numbers.iterator();
        while (integerIterator.hasNext()){
            System.out.println("Current Element: " + integerIterator.next());
        }

        for (int i = 0; i < numbers.size(); i++) {
            System.out.println("Each Collection Item : "+ numbers.get(i));
        }


        int arr[] = new int[5];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 2;
        arr[3] = 2;

        for(Integer eachNumber : arr){
            System.out.println("eachNumber  : "+ eachNumber);
        }
    }
}
