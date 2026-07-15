package com.app.entity;

import com.app.annotation.Institute;

public class Student {
	
	String sid;
	String sname;
	String saddr;
	
	public Student(String sid, String sname, String saddr) {
		
		this.sid = sid;
		this.sname = sname;
		this.saddr = saddr;
	}

	@Override
	@Institute(instituteName = "rama english class",branch = "Riga",
	websitename = "abc.com",contact = "00000")
	public String toString() {
		return "Student [sid=" + sid + ", sname=" + sname + ", saddr=" + saddr + "]";
	}
	
}
