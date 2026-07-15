package com.app.test;


import com.app.annotation.Course;
import com.app.entity.Student;

public interface Test {
	
	public static void main(String[] args) {
		
		Student student = new Student("1111111", "mukul", "maniyari");
		student.getStudentDetails();
		System.out.println();
		
		Class cls = student.getClass();
		Course[] courses = (Course[]) cls.getAnnotationsByType(Course.class);
		
		for(Course course : courses) {
			System.out.println(course.courseId() + " " + course.cname() + " " + course.cost());
		}
	}

}
