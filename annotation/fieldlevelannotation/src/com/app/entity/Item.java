package com.app.entity;

public class Item {
	
	String itemid;
	String itemname;
	int itemcost;
	
	public Item(String itemid, String itemname, int itemcost) {

		this.itemid = itemid;
		this.itemname = itemname;
		this.itemcost = itemcost;
	}

	public void getItemDetails() {
		System.out.println("item detals: ");
		System.out.println("-------------------");
		System.out.println("item id : " + itemid);
		System.out.println("item name : " + itemname);
		System.out.println("item cost :" + itemcost);
	}
	

}
