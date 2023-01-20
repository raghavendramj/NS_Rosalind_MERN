package com.learning.collections;

import java.util.HashSet;
import java.util.Iterator;

public class HashSetExample {

	public static void main(String[] args) {
		HashSet<Integer> hashSet = new HashSet<Integer>();
		hashSet.add(10);
		hashSet.add(23);
		hashSet.add(12);
		hashSet.add(34);
		hashSet.add(null);
		hashSet.add(14);
		hashSet.add(34);
		System.out.println("Elements are ... " + hashSet);

		System.out.println("\n*************USING WHILE ITERATOR*********************");
		Iterator<Integer> itr = hashSet.iterator();
		while (itr.hasNext()) {
			System.out.println("while-iterator - Next -> " + itr.next());
		}
	}
}
