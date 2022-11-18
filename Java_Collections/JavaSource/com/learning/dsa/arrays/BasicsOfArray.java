package com.learning.dsa.arrays;

public class BasicsOfArray {




    public static void main(String[] args) {
        int arr[] = new int[5];
        arr[0] = 1;
        arr[1] = 12;
        arr[2] = 6;
        arr[3] = 16;
        arr[4] = 45;
        //Array Index Out of bound exception!
        //arr[5] = 34;

        System.out.println("Element at 0th location :- ");
        System.out.println(arr[0]);

        //Initialize; condition check; increment / decrement
        //1. initialize -> i -> 0 //ONE TIME PROCESS
        //2. i-> 0 < 5 => true
        //3. Will go inside the loop. -> Element at 0th location :- 1
        //4. i++ => i-> 1
        //5. i < arr.length => 1 < 5 => true
        //6. Will go inside the loop. -> Element at 1th location :- 12
        //7. i++ => i-> 2
        //8. i < arr.length => 2 < 5 => true
        //9. Will go inside the loop. -> Element at 2th location :- 6
        //10. i++ => i-> 3
        //11. i < arr.length => 3 < 5 => true
        //12. Will go inside the loop. -> Element at 3th location :- 16
        //13. i++ => i-> 4
        //14. i < arr.length => 4 < 5 => true
        //15. Will go inside the loop. -> Element at 4th location :- 45
        //16. i++ => i-> 5
        //17. i < arr.length => 5 < 5 => false

        for (int i = 0; i < arr.length; i++) {
            System.out.println("Element at " + i + "th location :- " + arr[i]);
        }

        System.out.println("\nFor Each Loop Syntax ");

        for (int a : arr) {
            System.out.println("Element at " + a);
        }


        //  \n -> add new line in the console.
        System.out.println("\nArray INLINE DECLARATION AND INIT ");

        int custom[] = {5, 2, 6, 1, 7};
        for (int i = 0; i < custom.length; i++) {
            System.out.println("Element at " + i + "th location :- " + custom[i]);
        }

    }
}
