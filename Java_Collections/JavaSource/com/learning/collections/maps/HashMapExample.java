package com.learning.collections.maps;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class HashMapExample {

	public static void main(String[] args) {
		Map<Integer, String> hashMap = new HashMap<>();
		hashMap.put(1, "Keshav");
		hashMap.put(2, "Savon");
		hashMap.put(3, "Sandy");
		hashMap.put(4, "Pavan");

		System.out.println("Map Details :- " + hashMap);
		System.out.println("Retreiving a value based on key : " + hashMap.get(3));

		System.out.println("Only keys : " + hashMap.keySet());
		System.out.println("Only Values : " + hashMap.values());
		System.out.println("Enrties : " + hashMap.entrySet());

		System.out.println("\n********* Using keySet ************");

		Set<Integer> keys = hashMap.keySet();
		for (Integer eachKey : keys) {
			String value = hashMap.get(eachKey);
			System.out.println("Key : " + eachKey + " Value : " + value);
		}

		System.out.println("\n********* Using entrySet ************");
		for (Map.Entry<Integer, String> eachEntry : hashMap.entrySet()) {
			System.out.println("Key : " + eachEntry.getKey() + " Value : " + eachEntry.getValue());
		}
	}
}
