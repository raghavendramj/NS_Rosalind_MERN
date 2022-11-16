package com.learning.ds.stacks;

public class StackUsingArrrays {

    static final int MAX = 4;
    int top = -1;
    int stack[] = new int[MAX];

    public static void main(String[] args) {
        StackUsingArrrays stackObj = new StackUsingArrrays();
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

    boolean push(int element) {
        if (top >= MAX - 1) {
            System.out.println("************ Stack overflow! ************");
            return false;
        }
        top++;
        stack[top] = element;
        return true;
    }

    int pop() {
        if (top < 0) {
            System.out.println("^^^^^^^^^^^^^^^^ Stack underflow! ^^^^^^^^^^^^^^^^ ");
            return 0;
        }

        int removedElement = stack[top];
        top--;
        return removedElement;
    }

    boolean isEmpty() {
        if (top < 0)
            return true;
        else
            return false;
    }

    int peek() {
        if (top < 0) {
            System.out.println("Stack underflow!");
            return 0;
        }
        return stack[top];
    }

    void print() {
        System.out.print("\nElements in the stack are :- ");
        for (int i = top; i >= 0; i--) {
            System.out.print(stack[i] + "  ");
        }
        System.out.println();
    }
}
