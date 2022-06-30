package com.tinyhome.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tinyhome.models.User;
import com.tinyhome.services.UserService;

@Controller
@ResponseBody
@RequestMapping(value="/user")
@CrossOrigin
public class UserController {
	User u = new User();
	private UserService us;
	
	@Autowired
	public UserController(UserService service) {
		this.us =service;
	}
	@RequestMapping(method=RequestMethod.GET)
	public List<User> getAllUsers(){
		return us.getAllUsers();
		//this one works
	}
	@GetMapping("/{id}")//returns user by id
	public ResponseEntity<User> getUserById(@PathVariable("id") int id){
		System.out.println(id);
		u = us.getUserById(id);
		if(u == null) {
			
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(u);
		}else {
			
			return ResponseEntity.ok(u);
		}
	}
	@PutMapping //needs testing to ensure it works as intended currently unused in frontend
	public ResponseEntity<User> update(@RequestBody User u){
		if(u==null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(u);
		}
		else {
			u = us.update(u);
			return ResponseEntity.status(202).body(u);
		}
	}
	

}