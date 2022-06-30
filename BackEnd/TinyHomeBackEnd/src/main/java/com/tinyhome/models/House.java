package com.tinyhome.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


@Component
@Scope("prototype")
@Entity
@Table(name="house")
public class House {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "house_name", nullable = false)
	private String housename;
	private String description;
	private double price;
	private int size;
	private int baths;
	private int rooms;
	
	public House() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public House(int id, String homename, String description,
			double price, int size, int rooms, int baths) {
		super();
		this.id = id;
		this.housename = homename;
		this.description = description;
		this.price = price;
		this.size = size;
		this.rooms = rooms;
		this.baths = baths;
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

	

	
	public String getHousename() {
		return housename;
	}


	public void setHousename(String housename) {
		this.housename = housename;
	}


	public void setDescription(String description) {
		this.description = description;
	}

	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	
	public int getRooms() {
		return rooms;
	}
	public void setRooms(int rooms) {
		this.rooms = rooms;
	}
	
	public int getBaths() {
		return baths;
	}

	public void setBaths(int baths) {
		this.baths = baths;
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
		result = prime * result + ((housename == null) ? 0 : housename.hashCode());
		result = prime * result + size;
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
		House other = (House) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
			return false;
		if (housename == null) {
			if (other.housename != null)
				return false;
		} else if (!housename.equals(other.housename))
			return false;
		if (size != other.size)
			return false;
		if(baths != other.baths)
			return false;
		if(rooms != other.rooms)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "House [id=" + id + ", housename=" + housename + ", description=" + description
				 + ", price=" + price + ", size=" + size + ", baths=" + baths + "rooms= " + rooms + "]";
	}
}