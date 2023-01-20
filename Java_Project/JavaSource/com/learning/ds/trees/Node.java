package com.learning.ds.trees;

public class Node {

    Node left;
    Node right;
    int data;

    public Node(int data) {
        this.data = data;
        left = right = null;
    }
}
