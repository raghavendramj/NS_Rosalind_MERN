package com.learning.ds.dobly.linkedlist;

import java.util.HashSet;

public class RemoveDupsSortedList {

    public static void main(String[] args) {
        Node head = null;

        ReverseADLL list = new ReverseADLL();
        head = list.appendNode(head, 1);
        list.appendNode(head, 12);
        list.appendNode(head, 2);
        list.appendNode(head, 1);
        list.appendNode(head, 12);
        list.appendNode(head, 3);
        list.appendNode(head, 35);
        list.printList(head);
        new RemoveDupsSortedList().removeDuplicates(head);
        list.printList(head);
    }

    void removeDuplicates(Node head) {
        HashSet<Integer> myHash = new HashSet<>();
        myHash.add(head.data);

        Node actualMove = head;
        Node curr = head.next;
        Node temp = null;
        while (curr != null) {
            if (myHash.add(curr.data)) {
                actualMove.next = curr;
                actualMove.prev = temp;
                temp = actualMove;
                actualMove = actualMove.next;
            }
            curr = curr.next;
        }
        actualMove.next = null;
    }
}
