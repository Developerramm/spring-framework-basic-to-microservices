package com.app.entity;

import com.app.annotation.Course;

@Course(courseId = "C111",cname = "java",cost = 10000)
@Course(courseId = "C112",cname = "springboot",cost = 20000)
@Course(courseId = "C113",cname = "angular",cost = 5000)
public class Student {
	
	String sid;
	String sname;
	String sadd;
	
	public Student(String sid, String sname, String sadd) {
	
		this.sid = sid;
		this.sname = sname;
		this.sadd = sadd;
	}
	
	
	public void getStudentDetails() {
		
		System.out.println("Student details");
		System.out.println("-----------------------");
		System.out.println("student id : " + sid);
		System.out.println("Student name : " + sname);
		System.out.println("Student address : " + sadd);
		
		System.out.println("--------------------------");
	}
	

}
