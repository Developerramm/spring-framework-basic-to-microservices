package com.app.annotation;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Repeatable(Courses.class)
@Documented
@Retention(RUNTIME)
@Target(TYPE)
public @interface Course {
	
	String courseId() default "C-1111";
	String cname() default "Java";
	int cost() default 10000;

}
