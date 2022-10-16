package com.learning.ds.trees;

public class HeightAndDiameterofaBT {

    Node root;

    public static void main(String[] args) {
        HeightAndDiameterofaBT tree = new HeightAndDiameterofaBT();
        tree.root = new Node(20);
        tree.root.left = new Node(8);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(12);
        tree.root.left.right.left = new Node(10);
        tree.root.left.right.right = new Node(14);
        tree.root.right = new Node(22);
        tree.root.right.right = new Node(25);

        System.out.println("\n Height of the BT is :- " + tree.heightOfBT(tree.root));
        int diamater[] = new int[1];
        tree.diameterOfBT(tree.root, diamater);
        System.out.println("\n Diameter of the BT is :- " + diamater[0]);
    }

    int heightOfBT(Node root) {
        if (root == null)
            return 0;
        int leftHeight = heightOfBT(root.left);
        int rightHeight = heightOfBT(root.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }


    int diameterOfBT(Node node, int diameter[]) {
        if (node == null)
            return 0;
        int leftHeight = diameterOfBT(node.left, diameter);
        int rightHeight = diameterOfBT(node.right, diameter);
        diameter[0] = Math.max(diameter[0], leftHeight + rightHeight + 1);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    int diameter(Node root)
    {
        // base case if tree is empty
        if (root == null)
            return 0;

        // get the height of left and right sub-trees
        int lheight = heightOfBT(root.left);
        int rheight = heightOfBT(root.right);

        // get the diameter of left and right sub-trees
        int ldiameter = diameter(root.left);
        int rdiameter = diameter(root.right);

        /* Return max of following three
          1) Diameter of left subtree
          2) Diameter of right subtree
          3) Height of left subtree + height of right
          subtree + 1
         */
        return Math.max(lheight + rheight + 1,
                Math.max(ldiameter, rdiameter));
    }


}
