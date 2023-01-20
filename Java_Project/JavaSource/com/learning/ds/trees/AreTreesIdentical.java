package com.learning.ds.trees;

public class AreTreesIdentical {

    boolean isSameTree(Node a, Node b) {
        /* Base case : Both empty */
        if (a == null && b == null) {
            return true;
        }

        // If only one is empty
        if (a == null || b == null) {
            return false;
        }

        return a.data == b.data
                && isSameTree(a.left, b.left)
                && isSameTree(a.right, b.right);
    }

    public static void main(String[] args) {
        AreTreesIdentical object = new AreTreesIdentical();

        Node tree1 = new Node(1);
        tree1.left = new Node(2);
        tree1.right = new Node(3);
        tree1.left.left = new Node(4);
        tree1.left.right = new Node(5);


        Node tree2 = new Node(1);
        tree2.left = new Node(2);
        tree2.right = new Node(3);
        tree2.left.left = new Node(4);
        tree2.left.right = new Node(5);


        System.out.println("Are trees identical? : " +
                object.isSameTree(tree1, tree2));
    }
}
