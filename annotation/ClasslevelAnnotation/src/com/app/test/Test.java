package com.app.test;

import java.lang.annotation.Annotation;

import com.app.entity.Account;
import com.app.entity.Bank;

public class Test {
	
	public static void main(String[] args) throws ClassNotFoundException {
		
		Account acc = new Account("2228", "ram", "saving", 10000);
		acc.getAccountDetails();
		System.out.println();
		
		Class cls = Class.forName("com.app.entity.Account");
		Annotation ann = cls.getAnnotation(Bank.class);
		
		Bank bank = (Bank)ann;
		System.out.println("Bank details");
		System.out.println("---------------------------------------");
		System.out.println("Bank id : " + bank.bankId());
		System.out.println("Bank name : " + bank.bankName());
		System.out.println("Branch : " + bank.branch());
		System.out.println("bank website : " + bank.website());
	}

}
