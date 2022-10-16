package com.learning.ds.trees;

import java.util.*;

public class BinaryTreeTraversal {

    Node root;

    public static void main(String[] args) {
        BinaryTreeTraversal tree = new BinaryTreeTraversal();
        tree.root = new Node(20);
        tree.root.left = new Node(8);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(12);
        tree.root.left.right.left = new Node(10);
        tree.root.left.right.right = new Node(14);
        tree.root.right = new Node(22);
        tree.root.right.right = new Node(25);

        List<Integer> traversalList = new ArrayList<>();
        tree.inOrder(tree.root, traversalList);
        System.out.println("Inorder is :- " + traversalList);

        traversalList = new ArrayList<>();
        tree.preOrder(tree.root, traversalList);
        System.out.println("preOrder is :- " + traversalList);

        traversalList = new ArrayList<>();
        tree.postOrder(tree.root, traversalList);
        System.out.println("postOrder is :- " + traversalList);

        traversalList = tree.levelOrderTraversal(tree.root);
        System.out.println("Level order traversal is :- " + traversalList);

        traversalList = tree.zigZagOrderTraversal(tree.root);
        System.out.println("Zigzag order traversal is :- " + traversalList);


    }

    void inOrder(Node node, List<Integer> traversalList) {
        if (node == null)
            return;
        inOrder(node.left, traversalList);
        traversalList.add(node.data);
        inOrder(node.right, traversalList);
    }

    void preOrder(Node node, List<Integer> traversalList) {
        if (node == null)
            return;
        traversalList.add(node.data);
        preOrder(node.left, traversalList);
        preOrder(node.right, traversalList);
    }

    void postOrder(Node node, List<Integer> traversalList) {
        if (node == null)
            return;
        postOrder(node.left, traversalList);
        postOrder(node.right, traversalList);
        traversalList.add(node.data);
    }

    List<Integer> levelOrderTraversal(Node node) {

        if (node == null)
            return null;

        Queue<Node> nodeQueue = new LinkedList<>();
        nodeQueue.add(node);

        List<Integer> levelOrderTraversal = new ArrayList<>();

        while (!nodeQueue.isEmpty()) {

            Node currentNode = nodeQueue.poll();
            if (currentNode != null) {
                levelOrderTraversal.add(currentNode.data);
            } else {
                return levelOrderTraversal;
            }

            if (currentNode.left != null) {
                nodeQueue.add(currentNode.left);
            }

            if (currentNode.right != null) {
                nodeQueue.add(currentNode.right);
            }
        }
        return levelOrderTraversal;
    }


    List<Integer> zigZagOrderTraversal(Node node) {
        if (node == null)
            return null;

        Queue<Node> nodeQueue = new LinkedList<>();
        nodeQueue.add(node);
        nodeQueue.add(new Node(-1));

        List<List<Integer>> allLevelsList = new ArrayList<>();
        List<Integer> eachLevelList = new ArrayList<>();

        while (!nodeQueue.isEmpty()) {

            Node currentNode = nodeQueue.poll();
            if (currentNode.data != -1) {

                eachLevelList.add(currentNode.data);
                if (currentNode.left != null) {
                    nodeQueue.add(currentNode.left);
                }
                if (currentNode.right != null) {
                    nodeQueue.add(currentNode.right);
                }
            } else {
                allLevelsList.add(eachLevelList);
                eachLevelList = new ArrayList<>();

                if (nodeQueue.isEmpty()) {
                    //System.out.println("Level order traversal :- " + allLevelsList);
                    break;
                } else {
                    nodeQueue.add(new Node(-1));
                }
            }
        }

        boolean leftToRight = true;
        eachLevelList = new ArrayList<>();
        for (List<Integer> curList : allLevelsList) {
            if (!leftToRight) {
                Collections.reverse(curList);
            }
            eachLevelList.addAll(curList);
            leftToRight = !leftToRight;
        }
        return eachLevelList;

    }
}
