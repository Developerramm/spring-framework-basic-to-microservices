package com.app.entity;

import com.app.annotation.Restaurant;

public class Order {
	
	String orderId;
	
	@Restaurant
	Item item;
	
	String customername;
	String customerMobile;
	String customerLocation;
	
	public Order(String orderId, Item item, String customername, 
			String customerMobile, String customerLocation) {
		this.orderId = orderId;
		this.item = item;
		this.customername = customername;
		this.customerMobile = customerMobile;
		this.customerLocation = customerLocation;
	}

	public void getOderDetails() {
		System.out.println("order detals");
		System.out.println("-------------------------");
		System.out.println("order id : " + orderId);
		System.out.println("customer name : " + customername);
		System.out.println("customer mobile number: " + customerMobile);
		System.out.println("customer location : " + customerLocation);
		
		
		item.getItemDetails();
	}

}
