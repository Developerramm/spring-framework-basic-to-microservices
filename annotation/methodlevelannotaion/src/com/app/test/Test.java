package com.app.test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

import com.app.annotation.Institute;
import com.app.entity.Student;

public class Test {
	
	public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, SecurityException {
		Student student = new Student("aaa00", "Amrita", "Riga");
		System.out.println("student details");
		System.out.println("---------------------");
		System.out.println(student);
		System.out.println("---------------------------------");
		
		System.out.println("Annotation details");
		
		Class cls = student.getClass();
		Method m = cls.getMethod("toString");
		
		Annotation ann = m.getAnnotation(Institute.class);
		Institute inst = (Institute)ann;
		System.out.println("name : " + inst.instituteName());
		System.out.println("branch : " + inst.branch());
		System.out.println("contact : " + inst.contact());
		System.out.println("website name : " + inst.websitename());
		
	}

}
