package com.learning.ds.trees;
 

public class MaximumSumPath {
    public static void main(String[] args) {
        Node root = new Node(-10);
        root.left = new Node(9);
        root.right = new Node(20);
        root.right.left = new Node(15);
        root.right.right = new Node(7);

        int maxValue[] = new int[1];
        maxValue[0] = Integer.MIN_VALUE;
        maxiPathSum(root, maxValue);
        System.out.println("The Max Path Sum for this tree is :- " + maxValue[0]);
    }

    static int maxiPathSum(Node node, int maxValue[]) {
        if (node == null) {
            return 0;
        }
        int left = Math.max(0, maxiPathSum(node.left, maxValue));
        int right = Math.max(0, maxiPathSum(node.right, maxValue));
        maxValue[0] = Math.max(maxValue[0], left + right + node.data);
        return node.data + Math.max(left, right);

    }
}
