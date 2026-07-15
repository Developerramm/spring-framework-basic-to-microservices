package com.app.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Inherited
@Documented
@Retention(RUNTIME)
@Target(FIELD)
public @interface Restaurant {
	
	String id() default "Ram-111";
	String name() default "Paradise";
	String contact() default "8899773344";

}
