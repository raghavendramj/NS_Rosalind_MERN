package com.learning.ds.heaps;


import java.util.HashMap;
import java.util.Iterator;
import java.util.PriorityQueue;

public class RelativeRanks {

    public static void main(String[] args) {
        int arr[] = {10, 3, 8, 9, 4};
        RelativeRanks relativeRanks = new RelativeRanks();
        relativeRanks.findRelativeRanksUsingPairs(arr);

    }

    public String[] findRelativeRanks(int[] score) {
        PriorityQueue<Integer> queue = new PriorityQueue<>((a, b) -> b - a);
        for (int eachScore : score) {
            queue.add(eachScore);
        }

        HashMap<Integer, String> rankMap = new HashMap<>();
        rankMap.put(queue.poll(), "Gold Medal");
        rankMap.put(queue.poll(), "Silver Medal");
        rankMap.put(queue.poll(), "Bronze Medal");
        Iterator<Integer> iterator = queue.iterator();

        int count = 4;
        while (iterator.hasNext()) {
            rankMap.put(iterator.next(), String.valueOf(count++));
        }

        String output[] = new String[score.length];
        for (int i = 0; i < score.length; i++) {
            output[i] = rankMap.get(score[i]);
            System.out.print(output[i] + " ");
        }

        return output;
    }

    public String[] findRelativeRanksUsingPairs(int[] score) {
        int n = score.length;
        String[] res = new String[n];

        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>((a, b) -> score[b] - score[a]);
        for (int i = 0; i < n; i++) {
            priorityQueue.add(i);
        }

        System.out.println("priorityQueue -> " + priorityQueue);

        int i = 1;
        while (!priorityQueue.isEmpty()) {
            int index = priorityQueue.poll();
            if (i > 3) {
                res[index] = Integer.toString(i);
            } else if (i == 1) {
                res[index] = "Gold Medal";
            } else if (i == 2) {
                res[index] = "Silver Medal";
            } else if (i == 3) {
                res[index] = "Bronze Medal";
            }
            i++;
        }

        for (int j = 0; j < score.length; j++) {
            System.out.print(res[j] + " ");
        }


        return res;
    }

}
