package com.app.entity;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Inherited
@Documented
@Retention(RUNTIME)
@Target(TYPE)
public @interface Bank {
	
	String bankId() default "B-111";
	String bankName() default "ICICI Bank";
	String branch() default "Sitamarhi";
	String website() default "www.icicisitamarhi.com";

}
