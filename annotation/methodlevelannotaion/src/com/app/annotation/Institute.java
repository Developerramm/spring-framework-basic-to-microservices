package com.app.annotation;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Inherited
@Documented
@Retention(RUNTIME)
@Target(METHOD)
public @interface Institute {
	
	String instituteName() default "Rama Institute";
	String websitename() default "www.ramainstitute.com";
	String contact() default "3333333";
	String branch() default "Patna";

}
