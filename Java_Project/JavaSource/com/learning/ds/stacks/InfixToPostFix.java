package com.learning.ds.stacks;

import java.util.Stack;

public class InfixToPostFix {

    public static void main(String[] args) {
        String infix = "A*(B*C+D*E)+F";

        String postfix = infixToPostfix(infix);
        System.out.println(postfix);
    }

    //Higher the precedence, lower the value
    static int precedence(char character) {
        switch (character) {
            // Multiplication and division
            case '*':
            case '/':
                return 2;
            // Addition and subtraction
            case '+':
            case '-':
                return 3;
            // Bitwise AND
            case '&':
                return 4;
            // Bitwise XOR (exclusive or)
            case '^':
                return 5;
            // Bitwise OR (inclusive or)
            case '|':
                return 6;
            default:
                return Integer.MAX_VALUE; //Opening brackets
        }
    }

    static boolean isOperand(char character) {
        if (character >= 'a' && character <= 'z')
            return true;
        else if (character >= 'A' && character <= 'Z')
            return true;
        else if (character >= '0' && character <= '9')
            return true;
        else
            return false;
    }

    static String infixToPostfix(String infix) {
        //base case
        if (infix == null || infix.isEmpty() || infix.length() == 0)
            return infix;

        Stack<Character> stack = new Stack<>();
        String postFix = "";
        for (char eachChar : infix.toCharArray()) {

            //Case 1:- If the current token is an opening bracket, '(', push it into the stack.
            if (eachChar == '(') {
                stack.add(eachChar);
            }
            //Case 2:- If the current token is a closing bracket, ')', pop tokens from the stack until the corresponding opening bracket ‘(‘ is removed.
            //Append each operator at the end of the postfix expression.
            else if (eachChar == ')') {
                //Remove all the contents in the stack till opening bracker
                while (stack.peek() != '(') {
                    postFix += stack.pop();
                }
                //Remove just the opening bracket.
                stack.pop();
            }

            //Case 3:- If the current token is an operand, append it at the end of the postfix expression.
            else if (isOperand(eachChar)) {
                postFix += eachChar;
            }

            //Case 4:- If the current token is an operator, push it on the top of the stack.
            // Before doing that, first pop from the stack till we have a lower precedence operator on top, or the stack becomes empty.
            // Append each operator at the end of the postfix expression.

            else {
                while (!stack.isEmpty() && precedence(eachChar) >= precedence(stack.peek())) {
                    postFix += stack.pop();
                }
                //After remove unprecedented characters add the incoming character to stack.
                stack.push(eachChar);
            }
        }

        //Add the remaining characters from stack to postfix expression.
        while (!stack.empty()) {
            postFix += stack.pop();
        }
        return postFix;
    }
}
