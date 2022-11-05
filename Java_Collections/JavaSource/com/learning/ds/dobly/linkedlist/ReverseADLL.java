package com.learning.ds.dobly.linkedlist;

public class ReverseADLL {

    public static void main(String[] args) {
        Node head = null;

        ReverseADLL list = new ReverseADLL();
        head = list.appendNode(head, 14);
        list.appendNode(head, 35);
        list.appendNode(head, 12);
        list.appendNode(head, 45);
        list.appendNode(head, 63);
        list.appendNode(head, 78);
        list.printList(head);
        head = list.reverse(head);
        list.printList(head);

    }

    Node reverse(Node head) {
        Node temp = null;
        Node curr = head;

        while (curr != null) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        if (temp != null) {
            head = temp.prev;
        }
        return head;
    }

    Node reverseDLL(Node head) {
        Node current = head;
        Node nextNode = null;
        Node PrevNode = null;

        while (current != null) {
            PrevNode = nextNode;
            nextNode = current;
            current = current.next;
            nextNode.next = PrevNode;
            nextNode.prev = current;
        }
        head = nextNode;

        return head;

    }


    void printList(Node head) {
        Node lastNode = null;

        Node temp = head;
        System.out.print("\nDLL -> Forward Direction..... ");
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null) {
                System.out.print(" -> ");
            }
            lastNode = temp;
            temp = temp.next;
        }

        temp = lastNode;
        System.out.print("\nDLL -> Reverse Direction..... ");
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.prev != null)
                System.out.print(" -> ");

            temp = temp.prev;
        }
        System.out.println();
    }

    Node appendNode(Node head, int data) {
        Node newNode = new Node(data);
        //1. If there's no node, we need
        if (head == null) {
            newNode.prev = null; //This is optional, as prev is already null
            head = newNode;
            return head;
        }

        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
        newNode.prev = temp;
        return head;
    }

}
