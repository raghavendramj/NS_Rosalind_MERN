package com.learning.ds.dobly.linkedlist;

public class DoublyLinkedList {
    Node head;

    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        list.appendNode(14);
        list.appendNode(12);
        Node delNode = list.appendNode(35);
        list.appendNode(14);
        Node dummyNodeForRef = list.insertAtBeginning(62);
        System.out.println("6th Node :- " + dummyNodeForRef.data);
        list.insertAtBeginning(74);
        list.printList();
        list.insertBeforeReferenceNode(dummyNodeForRef, 25);
        list.insertBeforeNode(dummyNodeForRef, 89);
        list.insertBeforeNode(new Node(455), 69);
        list.printList();
        list.deleteNode(delNode);
        list.printList();
    }

    void printList() {
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

    Node appendNode(int data) {
        Node newNode = new Node(data);
        //1. If there's no node, we need
        if (head == null) {
            newNode.prev = null; //This is optional, as prev is already null
            head = newNode;
            return newNode;
        }

        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
        newNode.prev = temp;
        return newNode;
    }

    Node insertAtBeginning(int data) {
        Node newNode = new Node(data);

        newNode.next = head; //Front/Right connection
        newNode.prev = null; // Previous/Left connection

        //1. If there's no node, we need
        if (head != null) {
            head.prev = newNode;
        }

        head = newNode; //making newNode as the head node
        return newNode;
    }

    void insertBeforeNode(Node refNode, int newData) {
        if (head == null) {
            return;
        }
        Node temp = head;
        //Case :- If refNode is not present in the list -> temp!= null
        while (temp != null && temp.next != refNode) {
            temp = temp.next;
        }

        if (temp == null) {
            System.out.println("Node is not part of linked list!");
            return;
        }
        Node newNode = new Node(newData);
        newNode.next = refNode;
        newNode.prev = refNode.prev;
        refNode.prev = newNode;
        if (newNode.prev != null) {
            newNode.prev.next = newNode;
        } else {
            head = newNode;
        }
        return;
    }

    void insertBeforeReferenceNode(Node nextNode, int newData) {
        if (nextNode == null)
            return;

        Node newNode = new Node(newData);

        //Step 1:- Make next connection of newNode
        newNode.next = nextNode;

        //Step 2:- Make prev connection of newNode
        newNode.prev = nextNode.prev;

        //Step 3:- Change prev of nextNode
        nextNode.prev = newNode;

        //Step 4:-
        // a. If Prev is not null :- Change Next's previous's next to current node
        if (newNode.prev != null) {
            newNode.prev.next = newNode;
        } else {
            // a. If Prev is null :- make current as head
            head = newNode;
        }
        return;
    }


    Node deleteNode(Node toBeDeletedNode){
        if (head == null || toBeDeletedNode == null)
            return null;

        if (head == toBeDeletedNode){
            head = head.next;
        }

        if(toBeDeletedNode.next!= null){
            toBeDeletedNode.next.prev = toBeDeletedNode.prev;
        }

        if(toBeDeletedNode.prev != null)
            toBeDeletedNode.prev.next = toBeDeletedNode.next;

        toBeDeletedNode = null;
        return head;
    }



}
