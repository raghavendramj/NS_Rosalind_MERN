package com.learning.java.basics;

class ReserveBank {

    //Instance Variables
    public String bankName;

    private int accountNumber;
    private int balance;

    private String username;
    private String password;

    public ReserveBank(String bankName, int accountNumber, int balance, String username, String password) {
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.username = username;
        this.password = password;
    }

    public int getBalance() {
        return this.balance;
    }

    public int getAccountNumber() {
        return this.accountNumber;
    }
}

public class Bank {
    public static void main(String[] args) {

        ReserveBank reserveBank = new ReserveBank("ICICI", 1234,
                10000, "raghav", "raghav@123");



    }
}
