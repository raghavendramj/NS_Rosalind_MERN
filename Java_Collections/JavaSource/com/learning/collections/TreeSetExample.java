package com.learning.collections;

import java.util.Iterator;
import java.util.TreeSet;

public class TreeSetExample {

	public static void main(String[] args) {
		// Sorting capability...
		TreeSet<String> treeSet = new TreeSet<String>();
		treeSet.add("Ravi");
		treeSet.add("Vijay");
		treeSet.add("Ravi");
		treeSet.add("Bunny");
		treeSet.add("Ajay");
		System.out.println("treeSet " + treeSet);

		System.out.println("\n*************USING WHILE ITERATOR*********************");
		// Iterator<String> itr = treeSet.iterator(); //ASC
		Iterator<String> itr = treeSet.descendingIterator(); // DSC
		while (itr.hasNext()) {
			System.out.println("while-iterator - Next -> " + itr.next());
		}

		System.out.println("\n***********************************");
		TreeSet<Integer> numberSet = new TreeSet<Integer>();
		numberSet.add(24);
		numberSet.add(66);
		numberSet.add(12);
		numberSet.add(15);
		System.out.println("numberSet -> " + numberSet);

		System.out.println("Highest value:- " + numberSet.pollLast());
		System.out.println("Lowest value:- " + numberSet.pollFirst());

		System.out.println("\n***********************************");
		TreeSet<String> alphaBets = new TreeSet<String>();
		alphaBets.add("A");
		alphaBets.add("B");
		alphaBets.add("C");
		alphaBets.add("D");
		alphaBets.add("E");
		alphaBets.add("F");
		alphaBets.add("G");
		alphaBets.add("H");
		alphaBets.add("I");

		System.out.println("Ascending Oder elements :- " + alphaBets);
		System.out.println("Descending Oder elements :- " + alphaBets.descendingSet());
		System.out.println("Head Set A-C(EXCLUSIVE): " + alphaBets.headSet("C"));
		System.out.println("Head Set A-C(INCLUSIVE): " + alphaBets.headSet("C", true));

		System.out.println("Tail Set F(INCLUSIVE): " + alphaBets.tailSet("F"));
		System.out.println("Tail Set F(EXCLUSIVE): " + alphaBets.tailSet("F", false));

		System.out.println("Sub Set D-G(EXCLUSIVE)" + alphaBets.subSet("D", "G"));
		System.out.println("Sub Set D-G(INCLUSIVE)" + alphaBets.subSet("D", true, "G", true));
	}
}
