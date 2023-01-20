package com.learning.ds.linkedlist;

import java.util.Arrays;
import java.util.List;

public class FindLoopInALinkedList {

    Node head;

    public static void main(String[] args) {
        FindLoopInALinkedList obj = new FindLoopInALinkedList();
        List<Integer> listContents = Arrays.asList(1, 2, 3, 4, 5, 6);
        for (Integer eachNumber : listContents) {
            obj.addElementFromRear(eachNumber);
        }
        obj.printList();
        obj.detectLoop();
        obj.createLoop();

        System.out.println("After attaching the loop :- ");
        Node temp = obj.head;
        for (int i = 0; i < 18; i++) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println();
        obj.detectLoop();
        obj.detectAndRemoveLoop();
        obj.printList();
    }

    void createLoop() {
        Node temp = head;
        Node toBeAttached = null;
        while (temp.next != null) {
            if (temp.data == 3) {
                toBeAttached = temp;
            }
            temp = temp.next;
        }
        temp.next = toBeAttached;
    }

    void detectLoop() {
        Node slowPtr = head;
        Node fastPtr = head;

        boolean loopExists = false;

        while (slowPtr != null && fastPtr != null && fastPtr.next != null) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;

            if (slowPtr == fastPtr) {
                loopExists = true;
                break;
            }
        }

        if (loopExists) {
            System.out.println("Loop Found...");
        } else {
            System.out.println("Loop doesn't exist!");
        }
    }

    void detectAndRemoveLoop() {
        if (head == null || head.next == null)
            return;

        Node slow = head;
        Node fast = head;


        //Identifying the loop
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                break;
            }
        }

        if (slow == fast) {
            slow = head;

            if (slow != fast) {
                while (slow.next != fast.next) {
                    slow = slow.next;
                    fast = fast.next;
                }
                fast.next = null;
            } else {
                while (fast.next != slow) {
                    fast = fast.next;
                }
                fast.next = null;
            }
        }
    }

    void addElementFromRear(int data) {
        if (head == null) {
            head = new Node(data);
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = new Node(data);
        return;
    }

    void printList() {
        System.out.print("\nElements in the list are.. :- ");
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null) {
                System.out.print(" -> ");
            }
            temp = temp.next;
        }
        System.out.println();
    }
}
