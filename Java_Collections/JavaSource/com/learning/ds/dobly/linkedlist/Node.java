package com.learning.ds.dobly.linkedlist;

public class Node {

    int data;
    Node next;
    Node prev;

    public Node(int data) {
        this.data = data;
        this.next = this.prev = null;
    }
}
