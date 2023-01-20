package com.learning.ds.stacks;

import java.util.Stack;

public class ValidParenthesis {

    public static void main(String[] args) {
        ValidParenthesis validParenthesis = new ValidParenthesis();
        System.out.println("Are brackets balanced :- " + validParenthesis.areBracketsBalanced("[]"));
        System.out.println("Are brackets balanced :- " + validParenthesis.areBracketsBalanced("{[()]}"));
        System.out.println("Are brackets balanced :- " + validParenthesis.areBracketsBalanced("[{"));
        System.out.println("Are brackets balanced :- " + validParenthesis.areBracketsBalanced("}"));
        System.out.println("Are brackets balanced :- " + validParenthesis.areBracketsBalanced("[]{}("));
        System.out.println("Are brackets balanced :- " + validParenthesis.areBracketsBalanced("[]{}()"));
    }

    boolean areBracketsBalanced(String input) {

        Stack<Character> stack = new Stack<>();


        for (int i = 0; i < input.length(); i++) {
            char eachChar = input.charAt(i);

            if (eachChar == '(' || eachChar == '[' || eachChar == '{') {
                stack.push(eachChar);
            } else {
                if (stack.empty())
                    return false;

                boolean isParenthesis = stack.peek() == '(' && eachChar == ')';
                boolean isSquareBrackets = stack.peek() == '[' && eachChar == ']';
                boolean isFlowerBrackets = stack.peek() == '{' && eachChar == '}';

                if (isParenthesis || isSquareBrackets || isFlowerBrackets) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}

