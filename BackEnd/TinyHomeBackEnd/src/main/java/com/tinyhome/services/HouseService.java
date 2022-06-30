package com.tinyhome.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tinyhome.DAO.HouseDAO;
import com.tinyhome.models.House;

@Service
public class HouseService {
	private HouseDAO hd;
	@Autowired
	public HouseService(HouseDAO hDAO) {
		this.hd = hDAO;
	}

	public House getHouseByName(String name) {
		return hd.getHouseByName(name);
	}
	public House getHouseById(int id) {
		return hd.getHouseById(id);
	}
	public List<House> getAllHouses(){
		return hd.getAllHouses();
	}
	public static void addHouse(House house) {
		HouseDAO.addHouse(house);
	}
}