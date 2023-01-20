package com.learning.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ArrayListExample {

	public static void main(String[] args) {

		// Classname<Type> object = new ClassName<Type>();
		// Type -> ONLY BE A CLASSNAME/REFERENCE TYPE

		ArrayList<Integer> firstList = new ArrayList<Integer>();
		firstList.add(10);
		firstList.add(45);
		firstList.add(89);
		firstList.add(12);
		firstList.add(34);

		System.out.println("firstList -> " + firstList);

		int number = firstList.get(4);
		System.out.println("number -> " + number);

		List<Integer> secondList = new ArrayList<Integer>();
		secondList.addAll(firstList);

		System.out.println("secondList -> " + secondList);

		// Remove
		firstList.remove(3);
		System.out.println("after removing 3rd indexed element firstList -> " + firstList);

		List<Integer> thirdList = new ArrayList<>();
		thirdList.add(89);
		thirdList.add(45);

		System.out.println("\n**********************************");
		firstList.add(45);
		firstList.add(45);
		System.out.println("Before removeall firstList -> " + firstList);
		firstList.removeAll(thirdList);
		// REMOVE ALL
		// firstList.removeAll(thirdList)
		// 1st -> firstList[10, 45, 89, 45, 34] - thirdList[89, 45] => firstList[10, 34]
		System.out.println("After removeall firstList -> " + firstList);
		System.out.println("thirdList -> " + thirdList);

		firstList.clear();
		secondList.clear();

		firstList.add(12);
		firstList.add(13);
		firstList.add(14);
		firstList.add(15);
		firstList.add(16);

		secondList.add(13);
		secondList.add(15);

		System.out.println("\n**********************************");
		System.out.println("Before RETAINALL firstList -> " + firstList);
		// RETAIN ALL
		firstList.retainAll(secondList);
		// firstList[12, 13, 14, 15, 16] - secondList[13, 15]=> firstList[13, 15]
		System.out.println("After RETAINALL firstList -> " + firstList);
		System.out.println("secondList -> " + secondList);

		firstList.clear();
		firstList.add(23);
		firstList.add(25);
		firstList.add(14);
		firstList.add(27);
		firstList.add(67);
		System.out.println("\n*************USING WHILE ITERATOR*********************");
		Iterator<Integer> itr = firstList.iterator();
		while (itr.hasNext()) {
			System.out.println("while-iterator - Next -> " + itr.next());
		}
		System.out.println("\n*************USING FOR I*********************");
		for (int i = 0; i < firstList.size(); i++) {
			Integer eachValue = firstList.get(i);
			System.out.println("for-i eachValue -> " + eachValue);
		}

		System.out.println("\n*************USING FOR EACH*********************");
		for (Integer eachValue : firstList) {
			System.out.println("for-each eachValue -> " + eachValue);
		}
	}
}
