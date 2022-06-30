package com.tinyhome.houses;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.tinyhome.houses.houseprofile;
@Component
@Scope("prototype")
@Entity
@Table(name="houseprofile")
public class  houseprofile{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	int id;
	@Column(name = "product_name", nullable = false)
	String productname;
	String description;
	@Column(name = "product_type")
	double price;
	public int size;
	
	public houseprofile() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public houseprofile(int id, String productname, String description, com.revature.models.producttype producttype,
			double price, int size) {
		super();
		this.id = id;
		this.productname = productname;
		this.description = description;
		this.price = price;
		this.size = size;
	}


	
	


	public houseprofile(int id, String productName, String description, double price) {
		super();
		this.id = id;
		this.productname = productName;
		this.description = description;
		this.price = price;
	}




	public void setId(int id) {
		this.id = id;
	}



	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getId() {
		return id;
	}
	
	public String getDescription() {
		return description;
	}

	public String getProductName() {
		return productname;
	}


	public void setProductName(String productname) {
		this.productname = productname;
	}

	public producttype getProducttype() {
		return producttype;
	}

	public void setProducttype(producttype producttype) {
		this.producttype = producttype;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		long temp;
		temp = Double.doubleToLongBits(price);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((productname == null) ? 0 : productname.hashCode());
		result = prime * result + ((producttype == null) ? 0 : producttype.hashCode());
		result = prime * result + quantity;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
			return false;
		if (productname == null) {
			if (other.productname != null)
				return false;
		} else if (!productname.equals(other.productname))
			return false;
		if (producttype != other.producttype)
			return false;
		if (quantity != other.quantity)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", productname=" + productname + ", description=" + description + ", producttype="
				+ producttype + ", price=" + price + ", quantity=" + quantity + "]";
	}
}
