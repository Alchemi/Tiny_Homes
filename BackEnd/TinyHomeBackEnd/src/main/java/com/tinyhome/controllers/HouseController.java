package com.tinyhome.controllers;

import java.util.ArrayList;	
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tinyhome.models.House;
import com.tinyhome.models.User;
import com.tinyhome.services.HouseService;
import com.tinyhome.services.UserService;

@Controller
@ResponseBody
@RequestMapping(value="/housecontroller")
@CrossOrigin
public class HouseController {
	House hp;
	public HouseService hs;
	
	@Autowired
	public HouseController(HouseService service) {
		this.hs =service;
	}
	@RequestMapping(method=RequestMethod.GET)
	public List<House> getAllHouses(){
		return hs.getAllHouses();
		//this one works
	}
	@GetMapping("/{id}")//returns product by id
	public ResponseEntity<House> getHouseById(@PathVariable("id") int id){
		
		hp = hs.getHouseById(id);
		if(hp == null) {
			
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(hp);
		}else {
			
			return ResponseEntity.ok(hp);
		}
	}
	
	@RequestMapping(value="/name")//returns product by name
	public ResponseEntity<House> getHouseByName(@RequestParam("name") String name){
		if(name == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}else{
			if(hs.getHouseByName(name) != null) {
				House h = hs.getHouseByName(name);
			return ResponseEntity.ok(h);
			}else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			}
		}
	}
	
    @PostMapping("/addhouse")//adds product to database, not used until admin side of frontend is added
    public static ResponseEntity<House> addHouse(@RequestBody House house){
    	System.out.println(house.getId());
    	
    	if(house.getHouseName() == null) {
    		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(house);
    	} else {
    		HouseService.addHouse(house);
    		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(house);
    	}
    }

}