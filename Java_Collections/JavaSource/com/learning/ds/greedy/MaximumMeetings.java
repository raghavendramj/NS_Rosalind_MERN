package com.learning.ds.greedy;

import java.util.*;

public class MaximumMeetings {

    public static void main(String[] args) {

    }

    List<Integer> maxMeetings(int n, int S[], int F[]) {
        ArrayList<Integer> answer = new ArrayList<>();
        int a[][] = new int[n][3];
        for (int i = 0; i < n; i++) {
            a[i][0] = i + 1;
            a[i][1] = S[i];
            a[i][2] = F[i];
        }

        Arrays.sort(a, Comparator.comparingInt(o -> o[2]));
        int r = a[0][2];
        answer.add(a[0][0]);

        for (int i = 1; i < a.length; i++) {
            if (a[i][1] > r) {
                answer.add(a[i][0]);
                r = a[i][2];
            }
        }
        Collections.sort(answer);
        return answer;
    }

}
