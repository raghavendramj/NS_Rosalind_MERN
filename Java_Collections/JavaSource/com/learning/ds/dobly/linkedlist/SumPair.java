package com.learning.ds.dobly.linkedlist;

public class SumPair {

    public static void main(String[] args) {
        Node head = null;

        ReverseADLL list = new ReverseADLL();
        head = list.appendNode(head, 1);
        list.appendNode(head, 2);
        list.appendNode(head, 3);
        list.appendNode(head, 4);
        list.appendNode(head, 6);
        list.appendNode(head, 8);
        list.appendNode(head, 9);
        list.printList(head);
        new SumPair().findSum(head, 7);
    }

    void findSum(Node head, int k) {
        Node left = head;
        Node right = head;
        while (right.next != null)
            right = right.next;
        while (left != right) {
            int value = left.data + right.data;
            if (value == k) {
                System.out.println(left.data + " " + right.data);
                if (left.next == right)
                    break;
                left = left.next;
                right = right.prev;
            } else if (value < k) {
                left = left.next;
            } else {
                right = right.prev;
            }
        }
    }
}
