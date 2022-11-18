package com.learning.dsa.arrays;

public class TwoDArrays {

    public static void main(String[] args) {

        int first[] = new int[3];
        first[0] = 12;
        first[1] = 45;
        first[2] = 67;
        //Array Index Out of bound exception!
        //first[3] = 78;

        System.out.println("First Array :- ");
        for (int element : first) {
            System.out.println(element);
        }

        int second[] = {23, 47, 89};
        System.out.println("Second Array :- ");
        //For EACH Loop
        for (int element : second) {
            System.out.println(element);
        }

        int third[] = {32, 65, 87};
        System.out.println("Third Array :- ");
        //Normal For Loop
        for (int i = 0; i < third.length; i++) {
            System.out.println(third[i]);
        }

        int my2DArray[][] = {first, second, third};
        int second2DArray[][] = {{4, 5, 6},
                                {7, 2, 1},
                                {34, 56, 12}};
        int thirdWay[][] = new int[3][3];
        thirdWay[0][0] = 1;
        thirdWay[0][1] = 2;
        thirdWay[0][2] = 3;

        thirdWay[1][0] = 4;
        thirdWay[1][1] = 5;
        thirdWay[1][2] = 6;

        thirdWay[2][0] = 7;
        thirdWay[2][1] = 8;
        thirdWay[2][2] = 9;

        System.out.println("\n\n\nPrinting 2D Array");
        for (int i = 0; i < thirdWay.length; i++) {
            int subArray[] = thirdWay[i];
            for (int j = 0; j < subArray.length; j++) {
                System.out.print(thirdWay[i][j]+ "   ");
            }
            System.out.println();

        }


    }
}
