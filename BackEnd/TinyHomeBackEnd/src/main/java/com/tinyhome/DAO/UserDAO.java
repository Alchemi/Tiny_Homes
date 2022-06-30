package com.tinyhome.DAO;

import java.util.ArrayList;

import java.util.List;


import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.tinyhome.models.User;
import com.tinyhome.utilities.HibernateUtil;
@Repository
public class UserDAO {
	
	private User u;
	@Autowired
	public UserDAO(User user) {
		this.u = user;
		
	}
	
			
	public int register(User user) {//persists user to the database

		try(Session session = HibernateUtil.getSession()) {

			
			session.save(user);
			//System.out.println(user.getUsername());

			HibernateUtil.closeSession();
			return 1;
		} catch(HibernateException e) {
			System.out.println("There was an error inserting the User");
			e.printStackTrace();
			return 0;
		}//look into insert

	}
	//gets user by username used for login authentication
	public User getUserByUsername(String username) {//returns user used by login
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM User WHERE username = ?1");
		q.setParameter(1, username);
		try {
		List<User> userList = q.getResultList();
		HibernateUtil.closeSession();
		u = userList.get(0);
		
		System.out.println("user exists");
		return u;
		} catch(Exception e) {
			return null;
		}
		
		
	}
		
	
	//gets user by id
	public User getUserById(int id) {
		Session ses = HibernateUtil.getSession();
		u = ses.get(User.class, id);
		HibernateUtil.closeSession();
		return u;

	}
	//returns a list of all users
	public List<User> getAllUsers(){
		Session ses = HibernateUtil.getSession();
		List<User> userList = ses.createQuery("FROM User").list();
		HibernateUtil.closeSession();
		return userList;

	}
	
	public void update(User user) {
		Session ses = HibernateUtil.getSession(); //opens the session
		Transaction tran = ses.beginTransaction(); //ALL and I do mean ALL update and delete methods MUST happen within a transaction
		System.out.println(user);
//		Query q = ses.createQuery("UPDATE User SET cart = '"+user.getCart()+"' WHERE id = " + user.getUserid());
//		q.executeUpdate();
		ses.merge(user); //this will actually merge our movie object with the database 
		tran.commit(); //This will commit the transaction if it did not encounter a problem
		HibernateUtil.closeSession(); //closes the session
		System.out.println("User updated");
	}
}