package com.learning.ds.stacks;

import java.util.Stack;

public class FindNextGreaterElement {

    static int[] findNextGreaterElement(int arr[]) {
        int n = arr.length;

        if (n <= 1) {
            return new int[]{};
        }

        Stack<Integer> stack = new Stack();
        int result[] = new int[n];
        for (int i = n - 1; i >= 0; i--) {

            int curElem = arr[i];
            while (!stack.isEmpty() && stack.peek() < curElem) {
                stack.pop();
            }
            if (stack.isEmpty()) {
                //Case1:- where there is no greater element to the right
                result[i] = -1;
            } else {
                //Case2:- where the topmost element in the stack is NGE
                result[i] = stack.peek();
            }

            stack.push(curElem);
        }

        for (int i = 0; i < n; i++) {
            System.out.println(arr[i] + " :- " + result[i]);
        }

        return result;
    }

    public static void main(String[] args) {
        int arr[] = {4, 3, 5, 2, 25, 10};
        findNextGreaterElement(arr);
    }
}
