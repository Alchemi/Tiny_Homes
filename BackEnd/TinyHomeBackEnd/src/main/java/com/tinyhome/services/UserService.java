package com.tinyhome.services;

import java.util.List;


import com.tinyhome.models.User;	
import com.tinyhome.DAO.UserDAO;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
private UserDAO ud;
	@Autowired
	public UserService(UserDAO uDAO) {
		this.ud= uDAO;
	}
	
	public User getUserByUsername(String username) {
		return ud.getUserByUsername(username);
	}
	public User getUserById(int id) {
		return ud.getUserById(id);
	}
	public List<User> getAllUsers(){
		return ud.getAllUsers();
	}
	public User update(User user) {
		ud.update(user);
		return user;
	}
}