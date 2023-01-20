package com.learning.ds.stacks;

public class StackAsLinkedList {

    StackNode root;

    public static void main(String[] args) {
        StackAsLinkedList stackObj = new StackAsLinkedList();
        stackObj.push(10);
        stackObj.push(20);
        stackObj.push(30);
        stackObj.push(40);
        stackObj.print();
        System.out.println(stackObj.pop() + " has been removed from the stack");
        stackObj.print();
        System.out.println(stackObj.pop() + " has been removed from the stack");
        stackObj.print();
        System.out.println(stackObj.pop() + " has been removed from the stack");
        stackObj.print();
    }

    //Insert beginning
    void push(int data) {
        StackNode newNode = new StackNode(data);
        if (root == null) {
            root = newNode;
            return;
        }

        StackNode temp = root;
        root = newNode;
        newNode.next = temp;
    }

    int pop() {
        if (root == null) {
            System.out.println("Stack is empty!");
            return 0;
        }

        int popedValue = root.data;
        root = root.next;
        return popedValue;
    }

    int peek() {
        if (root == null) {
            System.out.println("Stack is empty!");
            return 0;
        }
        return root.data;
    }

    boolean isEmpty() {
        if (root == null) {
            return true;
        } else {
            return false;
        }
    }

    void print() {
        System.out.print("\nElements in the stack are :- ");

        StackNode temp = root;
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null)
                System.out.print(" -> ");
            temp = temp.next;
        }
        System.out.println();
    }
}
