package com.app.entity;

@Bank(bankId = "11111",bankName = "Bank of India",branch = "Riga",website = "boi.com")
public class Account {
	String accNo;
	String accHolderName;
	String accType;
	int balance;
	
	public Account(String accNo, String accHolderName, String accType, int balance) {
		
		this.accNo = accNo;
		this.accHolderName = accHolderName;
		this.accType = accType;
		this.balance = balance;
	}
	
	public void getAccountDetails() {
		System.out.println("Account details");
		System.out.println("------------------------");
		System.out.println(accNo);
		System.out.println(accHolderName);
		System.out.println(accType);
		System.out.println(balance);
		System.out.println("------------------------------");
		
	}
	
	

}
