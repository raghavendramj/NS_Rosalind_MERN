package com.learning.java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ProfilesSort {

    public static void main(String[] args) {
        List<User> profiles = new ArrayList<>();
        profiles.add(new User("Neha", "Female", 21, Arrays.asList("Singing", "dancing")));
        profiles.add(new User("Pooja", "Female", 23, Arrays.asList("painting", "badminton")));
        profiles.add(new User("Vikas", "Male", 32, Arrays.asList("bowling", "cricket")));
        profiles.add(new User("Kiran", "Male", 29, Arrays.asList("badminton", "chess")));
        profiles.add(new User("Uday", "Male", 23, Arrays.asList("cricket", "programming")));
        profiles.add(new User("Nikita", "Female", 26, Arrays.asList("ludo", "chess")));

        List<User> sortedProfiles = profiles.stream()
                .sorted(Comparator.comparing(User::getGender)
                        .thenComparing(User::getAge))
                .collect(Collectors.toList());

        //System.out.println(sortedProfiles);



        profiles.stream()
                .sorted(Comparator.comparing(User::getGender)
                        .thenComparing(User::getAge))
                .collect(Collectors.toList()).forEach(System.out::println);
        //profiles.stream().sorted(Comparator.comparing(User::getHobbies)).thenComparing(User::getAge).thenComparing(User::getGender)).collect(Collectors.toList()).forEach(System.out::println);



    }

}
