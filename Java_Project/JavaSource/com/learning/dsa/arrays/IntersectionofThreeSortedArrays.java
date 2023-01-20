package com.learning.dsa.arrays;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class IntersectionofThreeSortedArrays {

    public static void main(String[] args) {
        int arr1[] = {1, 2, 3, 4, 5};
        int arr2[] = {1, 2, 5, 7, 9};
        int arr3[] = {1, 3, 4, 5, 8};
        List<Integer> integerList = arraysIntersection(arr1, arr2, arr3);
        System.out.println("Common Elements are :- " + integerList);
    }

    static List<Integer> arraysIntersection(int[] arr1, int[] arr2, int[] arr3) {

        Map<Integer, Integer> countMap = new HashMap<>();
        countNumbers(arr1, countMap);
        countNumbers(arr2, countMap);
        countNumbers(arr3, countMap);

        List<Integer> outList = new ArrayList<>();
        for (Map.Entry<Integer, Integer> eachEntry : countMap.entrySet()) {
            int value = eachEntry.getValue();
            if (value == 3) {
                int key = eachEntry.getKey();
                outList.add(key);
            }
        }
        return outList;
    }

    private static void countNumbers(int[] array, Map<Integer, Integer> countMap) {
        for (int i = 0; i < array.length; i++) {
            if (countMap.containsKey(array[i])) {
                int currentvalue = countMap.get(array[i]);
                countMap.put(array[i], currentvalue + 1);
            } else {
                countMap.put(array[i], 1);
            }
        }
    }
}
