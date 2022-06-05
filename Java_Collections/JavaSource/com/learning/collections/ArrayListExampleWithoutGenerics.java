package com.learning.collections;

import java.util.ArrayList;

public class ArrayListExampleWithoutGenerics {

	public static void main(String[] args) {
		
		
		ArrayList withoutGenerics = new ArrayList();
		withoutGenerics.add(12);
		withoutGenerics.add(45);
		withoutGenerics.add("Raghav");
		withoutGenerics.add(true);
		withoutGenerics.add('A');
		withoutGenerics.add(12.45);
		
		System.out.println("withoutGenerics :- "+ withoutGenerics);
		
		String nameOfthePerson = (String) withoutGenerics.get(1); //Result in Exceptiopn
		System.out.println("nameOfthePerson -> "+ nameOfthePerson);
		
	}

}
