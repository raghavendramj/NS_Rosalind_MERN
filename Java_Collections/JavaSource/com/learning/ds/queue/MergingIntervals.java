package com.learning.ds.queue;

import java.util.*;

public class MergingIntervals {


    static void printMergingInterval(List<Interval> intervals) {

        //Collections.sort(intervals, (a, b) -> a.begin - b.begin);
        Collections.sort(intervals, Comparator.comparingInt(a -> a.begin));

        Stack<Interval> stack = new Stack<>();

        for(Interval eachInterval : intervals){
            if(stack.empty()) {
                stack.push(eachInterval);
            }
            else if(eachInterval.begin > stack.peek().end){
                stack.push(eachInterval);
            }
            else if(stack.peek().end < eachInterval.end){
                stack.peek().end = eachInterval.end;
            }
        }

        while (!stack.isEmpty()){
            System.out.println(stack.pop());
        }
    }

    public static void main(String[] args) {
        List<Interval> intervals = new ArrayList<>();
        intervals.add(new Interval(1, 5));
        intervals.add(new Interval(2, 3));
        intervals.add(new Interval(4, 6));
        intervals.add(new Interval(7, 8));
        intervals.add(new Interval(8, 10));
        intervals.add(new Interval(12, 15));

        printMergingInterval(intervals);
    }


    static class Interval {
        int begin, end;

        public Interval(int begin, int end) {
            this.begin = begin;
            this.end = end;
        }

        @Override
        public String toString() {
            return "Interval{" +
                    "begin=" + begin +
                    ", end=" + end +
                    '}';
        }
    }

}
