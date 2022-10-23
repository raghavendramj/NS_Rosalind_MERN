package com.learning.ds.linkedlist;

public class LinkedListOperations {

    Node head;

    public static void main(String[] args) {
        LinkedListOperations operations = new LinkedListOperations();
        operations.insert(12);
        operations.insert(23);
        operations.insert(34);
        operations.printList();
        operations.insertAfter(new Node(23), 5);
        operations.printList();
        operations.append(7);
        operations.printList();
    }

    void insert(int newData) {
        Node newNode = new Node(newData);
        newNode.next = head;
        head = newNode;
    }

    void insertAfter(Node preNode, int newData) {
        if (preNode == null)
            return;
        Node temp = head;
        while (temp.data != preNode.data) {
            temp = temp.next;
        }
        Node newNode = new Node(newData);
        newNode.next = temp.next;
        temp.next = newNode;

    }

    void append(int newData) {
        Node last = head;
        while (last.next != null) {
            last = last.next;
        }
        Node newNode = new Node(newData);
        last.next = newNode;
    }

    void printList() {
        Node temp = head;
        System.out.print("\nElements in the list ... ");
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null)
                System.out.print(" -> ");

            temp = temp.next;
        }
        System.out.println();
    }

}
