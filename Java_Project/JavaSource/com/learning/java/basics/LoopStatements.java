package com.learning.java.basics;

public class LoopStatements {


    //"pen" -> 0, pencil -> 1, eraser -> 2, anything else -> -1

    //access modifer = public && || static
    //return type = int
    //function name = ifStatementExample
    //input parameters => Datatype variable -> String input
    public static int ifStatementExample(String input) {
        if (input.equals("pen")) {
            return 0;
        } else if (input.equals("pencil")) {
            return 1;
        } else if (input.equals("eraser")) {
            return 2;
        } else {
            return -1;
        }
    }

    public static int switchStatementExample(String input) {
        int returValue;
        switch (input) {
            case "pen":
                returValue = 0;
                break;
            case "pencil":
                returValue = 1;
                break;
            case "eraser":
                returValue = 2;
                break;
            default:
                returValue = -1;
                break;
        }

        return returValue;
    }

    public static void main(String[] args) {

        System.out.println("\n\n --------> If Else Statements Example :- ");

        System.out.println("Output is " + ifStatementExample("pen"));
        System.out.println("Output is " + ifStatementExample("pencil"));
        System.out.println("Output is " + ifStatementExample("pen"));
        System.out.println("Output is " + ifStatementExample("eraser"));
        System.out.println("Output is " + ifStatementExample("sharpner"));
        System.out.println("Output is " + ifStatementExample("scale"));
        System.out.println("Output is " + ifStatementExample("compass"));

        System.out.println("\n\n --------> Switch Statements Example :- ");
        System.out.println("Output is " + switchStatementExample("pen"));
        System.out.println("Output is " + switchStatementExample("pencil"));
        System.out.println("Output is " + switchStatementExample("pen"));
        System.out.println("Output is " + switchStatementExample("eraser"));
        System.out.println("Output is " + switchStatementExample("sharpner"));
        System.out.println("Output is " + switchStatementExample("scale"));
        System.out.println("Output is " + switchStatementExample("compass"));

    }


}
