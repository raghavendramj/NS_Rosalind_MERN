package com.learning.ds.linkedlist;

import java.util.Arrays;
import java.util.List;

public class ReverseALinkedLIst {

    Node head;

    public static void main(String[] args) {
        ReverseALinkedLIst obj = new ReverseALinkedLIst();
        List<Integer> listContents = Arrays.asList(1, 2, 3, 4, 5, 6);
        for (Integer eachNumber : listContents) {
            obj.head = obj.addElementFromRear(obj.head, eachNumber);
        }
        obj.printList(obj.head);

        obj.head = obj.reverseALinkedList(obj.head);
        System.out.println("\nAfter reversing the linked list...");
        obj.printList(obj.head);
    }

    Node reverseALinkedList(Node myHead) {

        Node prev = null;
        Node nextNode = null;
        Node curr = myHead;

        while (curr != null) {
            //Step 1:- Save next node in a variable
            nextNode = curr.next;

            //Step 2:- remove next connection and point it to previous node
            curr.next = prev;

            //Step 3 :- Move previous one step ahead
            prev = curr;

            //Step 4:- Move curr one step ahead
            curr = nextNode;
        }

        myHead = prev;
        return myHead;
    }

    Node addElementFromRear(Node myHead, int data) {
        if (myHead == null) {
            myHead = new Node(data);
            return myHead;
        }
        Node temp = myHead;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = new Node(data);
        return myHead;
    }

    void printList(Node myHead) {
        System.out.print("\nElements in the list are.. :- ");
        Node temp = myHead;
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
