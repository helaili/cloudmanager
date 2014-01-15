package org.mongodb.mcm.api.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.mongodb.mcm.api.dao.AmiDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/ami")
public class AmiService {
	private Logger logger = LoggerFactory.getLogger(AmiService.class);
	
	//auto-wired
	private AmiDAO amiDAO = null;
	
	public AmiDAO getAmiDAO() {
		return amiDAO;
	}

	@Autowired
	public void setAmiDAO(AmiDAO amiDAO) {
		this.amiDAO = amiDAO;
	}
	
	
	public AmiService() {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);	 
	}

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String findAllAmi() {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getAmiDAO().findAllAmis());
			logger.debug("Querying all ami resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("names")
	@Produces(MediaType.APPLICATION_JSON)
	public String findAmiNames() {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getAmiDAO().findAmiNames());
			logger.debug("Querying unique ami names resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	@GET
	@Path("{ami}")
	@Produces(MediaType.APPLICATION_JSON)
	public String findAmi(@PathParam("ami") String ami) {
		
		if(logger.isDebugEnabled()) {
			logger.debug("AMI=" + ami);
		}
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getAmiDAO().findAmi(ami));
			logger.debug("Querying regions for AMI="+ami+" resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("search")
	@Produces(MediaType.APPLICATION_JSON)
	public String findAmiWithParam(@QueryParam("region") String region) {
		
		if(logger.isDebugEnabled()) {
			logger.debug("Region=" + region);
		}
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getAmiDAO().findAmiByRegion(region));
			logger.debug("Querying ami for region="+region+" resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
