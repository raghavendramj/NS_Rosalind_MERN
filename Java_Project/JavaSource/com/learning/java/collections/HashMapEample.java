package com.learning.java.collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapEample {

    public static void main(String[] args) {
        HashMap<String, String> userMap = new HashMap<>();

        userMap.put("name", "Raghavendra M J");
        userMap.put("email", "raghav@gmail.com");
        userMap.put("id", "123");

        System.out.println("userMap " + userMap);
        System.out.println("only keys" + userMap.keySet());
        System.out.println("only values" + userMap.values());
        System.out.println("only entry" + userMap.entrySet());


        int arr[] = {1, 1, 2, 2, 1, 2, 3, 4, 5, 4, 5, 5};
        //Map -> 1=3, 2=3, 3=1, 4=2, 5=3

        Map<Integer, Integer> countMap = new HashMap<>();
        for (int eachNumber : arr) {
            if (countMap.containsKey(eachNumber)) {
                int currentCount = countMap.get(eachNumber);
                countMap.put(eachNumber, currentCount + 1);
            } else {
                countMap.put(eachNumber, 1);
            }
        }

        System.out.println("countMap -> " + countMap);


    }
}
