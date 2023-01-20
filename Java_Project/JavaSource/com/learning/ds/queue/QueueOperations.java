package com.learning.ds.queue;

public class QueueOperations {
    static int front, rear, capacity;
    static int queue[];

    public QueueOperations(int c) {
        capacity = c;
        front = rear = 0;
        queue = new int[capacity];
    }

    static void enqueue(int data) {
        if (capacity == rear) {
            System.out.println("\n Queue is full!");
            return;
        }

        queue[rear] = data;
        rear++;
        return;
    }

    static void deque() {
        if (front == rear) {
            System.out.println("\n********Queue is empty!");
            return;
        } else {

            for (int i = 0; i < rear; i++) {
                queue[i] = queue[i + 1];
            }

            if (rear < capacity) {
                queue[rear] = 0;
            }

            rear--;
        }
        return;
    }

    static void display() {
        if (front == rear) {
            System.out.println("\n********Queue is empty!");
            return;
        }

        System.out.println("\nElements in the queue are :- ");
        for (int i = front; i < rear; i++) {
            System.out.print(queue[i]);
            if (i < rear - 1) {
                System.out.print(" <-- ");
            }
        }
        System.out.println();
        return;
    }

    public static void main(String[] args) {
        QueueOperations obj = new QueueOperations(10);
        display();

        enqueue(20);
        enqueue(30);
        enqueue(40);
        enqueue(50);
        display();
        enqueue(70);
        enqueue(80);
        display();
        deque();
        deque();
        display();
    }
}
