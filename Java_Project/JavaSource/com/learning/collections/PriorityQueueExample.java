package com.learning.collections;

import java.util.PriorityQueue;

public class PriorityQueueExample {
	public static void main(String[] args) {
		PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
		priorityQueue.add(12);
		priorityQueue.add(34);
		priorityQueue.add(24);
		priorityQueue.offer(16);
		priorityQueue.offer(15);
		priorityQueue.offer(32);
		priorityQueue.offer(65);
		priorityQueue.offer(45);
		priorityQueue.offer(90);
		System.out.println("Elements in queue " + priorityQueue);
		
		priorityQueue.remove();
		priorityQueue.poll();
		System.out.println("AFTER POLL AND REMOVE :- " + priorityQueue);
		
		System.out.println("priorityQueue peek "+ priorityQueue.peek());
	}
}
