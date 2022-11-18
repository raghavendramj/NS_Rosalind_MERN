package com.learning.java.collections;

import java.util.*;

public class SetsExample {

    public static void main(String[] args) {

        //Unique Values + No order is guranteed
        Set<Integer> numbers = new HashSet<>();
        numbers.add(10);
        numbers.add(10);
        numbers.add(20);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(40);
        System.out.println("first set  : "+ numbers);

        //Unique Values + Sorted
        Set<Integer> secondSet = new TreeSet<>();
        secondSet.add(10);
        secondSet.add(10);
        secondSet.add(20);
        secondSet.add(20);
        secondSet.add(30);
        secondSet.add(40);
        secondSet.add(40);
        System.out.println("secondSet  : "+ secondSet);
    }
}
