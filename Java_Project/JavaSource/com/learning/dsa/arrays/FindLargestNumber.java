package com.learning.dsa.arrays;

public class FindLargestNumber{

	public static void main(String args[]) {
	
		int numbers[] = {10, 12, 1, 23, 13, 6, 56, 15, 40};
		int largest = 0;
		
		int length = numbers.length;
		
		for(int i=0; i<length; i++){
			if(numbers[i] > largest){
				largest = numbers[i] ;
			}
		}
		System.out.println("Largest Number : "+ largest);
	}
}