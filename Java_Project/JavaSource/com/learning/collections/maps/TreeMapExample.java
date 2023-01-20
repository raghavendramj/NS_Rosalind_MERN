package com.learning.collections.maps;

import java.util.TreeMap;

public class TreeMapExample {
	
	public static void main(String[] args) {
		TreeMap<Integer, String> map = new TreeMap<Integer, String>();
		map.put(100, "Amit");
		map.put(102, "Ravi");
		map.put(101, "Vijay");
		map.put(103, "Rahul");
		System.out.println("Contents of treeMap -> " + map);
		System.out.println("descendingMap: " + map.descendingMap());
		System.out.println("headMap: " + map.headMap(102, true));
		System.out.println("tailMap: " + map.tailMap(101, true));
		System.out.println("subMap: " + map.subMap(100, false, 102, true));
		
		System.out.println("Before REMOVAL -> " + map);
		map.remove(101);
		System.out.println("After REMOVAL -> " + map);
	}

}
