package com.tinyhome.DAO;

import java.util.List;

import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tinyhome.models.House;
import com.tinyhome.utilities.HibernateUtil;
@Repository
public class HouseDAO {
	private House p;
	@Autowired
	public HouseDAO(House prod) {
		this.p = prod;
	}
	
	public HouseDAO() {
		// TODO Auto-generated constructor stub
	}
	@PersistenceContext//adds product to the database
	public static void addHouse(House house) {
		try(Session ses = HibernateUtil.getSession()){
			ses.save(house);
			HibernateUtil.closeSession();
		} catch(HibernateException e) {
			System.out.println(e);
			e.printStackTrace();
		}
		
	}


	public House getHouseByName(String name) {//gets product with matching name
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Product WHERE Housename = ?1");
		q.setParameter(1, name);
		try {
		List<House> productList = q.getResultList();
		HibernateUtil.closeSession();
		House p = productList.get(0);
		
		System.out.println("House exists");
		return p;
		} catch(Exception e) {
			return null;
		}
		
		
	}
	public House getHouseById(int id) {
		Session ses = HibernateUtil.getSession();
		House p = ses.get(House.class, id);
		HibernateUtil.closeSession();
		return p;

	}
	public List<House> getAllHouses(){
		Session ses = HibernateUtil.getSession();
		List<House> productList = ses.createQuery("FROM House").list();
		HibernateUtil.closeSession();
		return productList;

	}
	

	
}