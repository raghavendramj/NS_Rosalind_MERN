package com.learning.ds.queue;

import java.util.Deque;
import java.util.HashSet;
import java.util.LinkedList;

public class LeastRecentlyUsedCache {

    private Deque<Integer> deque;
    private HashSet<Integer> hashSet;
    private int CACHE_SIZE;

    LeastRecentlyUsedCache(int capacity) {
        deque = new LinkedList<>();
        hashSet = new HashSet<>();
        CACHE_SIZE = capacity;
    }

    public static void main(String[] args) {
        LeastRecentlyUsedCache cache = new LeastRecentlyUsedCache(4);
        cache.refer(1);
        cache.refer(2);
        cache.refer(3);
        cache.refer(4);
        cache.display();
        cache.refer(2);
        cache.display();
        cache.refer(6);
        cache.display();
    }

    void display() {

        System.out.print("\nElements in the LRU cache are :- ");
        for (int eachElement : deque) {
            System.out.print(eachElement + "  ");
        }
        System.out.println();
    }

    void refer(int page) {
        if (!hashSet.contains(page)) {
            //Case : Cache Full
            if (deque.size() == CACHE_SIZE) {
                int lastElement = deque.removeLast();
                hashSet.remove(lastElement);
            }
        } else {
            //Cache got the element in the queue
            deque.remove(page);
        }

        deque.push(page);
        hashSet.add(page);
    }


}
