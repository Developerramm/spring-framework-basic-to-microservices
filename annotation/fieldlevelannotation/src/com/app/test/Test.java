package com.app.test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;

import com.app.annotation.Restaurant;
import com.app.entity.Item;
import com.app.entity.Order;

public class Test {
	
	public static void main(String[] args) throws NoSuchFieldException, SecurityException {
		System.out.println("Field level annotation");
		
		Item item = new Item("B4i", "Biryani", 100);
		Order order = new Order("o11", item, "ramu", "99999", "Maniyari");
		
		order.getOderDetails();
		
		System.out.println("Annotation details ");
		System.out.println("-----------------------------------------");
		
		Class cls = order.getClass();
		Field fid = cls.getDeclaredField("item");
		
		Annotation ann = fid.getAnnotation(Restaurant.class);
		Restaurant restaurant = (Restaurant)ann;
		
		System.out.println(restaurant.id());
		System.out.println(restaurant.name());
		System.out.println(restaurant.contact());
		
		
	}

}
