package com.rest;

import java.util.List;

import javax.ws.rs.Consumes;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dao.NseDAO;
import com.dao.UserDAO;
import com.dto.Nse;
import com.dto.User;



@Path("myresource")
public class MyResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }
    
    @Path("regUser")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
    public void registerUser(User user){
    	System.out.println("Data received in register User " + user);
    	UserDAO userDao = new UserDAO();
    	userDao.register(user);
    }
    	
    @Path("UserLogin/{mailId}/{password}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public User getUserByMailId(@PathParam("mailId") String mailId , @PathParam("password") String password){
    	System.out.println("Recieved in getUserByMailId : " + mailId + password); 
		UserDAO userDao = new UserDAO();
		User user = userDao.getUserByMailId(mailId,password);	
		 
		return user;
	}
    /*
    @Path("getNse")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Nse> getAllNse() {
    	NseDAO nseDao = new NseDAO();
    	List<Nse> nse = nseDao.getAllNse();
    	return nse;
    }*/
}
