package org.mongodb.mcm.api.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.mongodb.mcm.api.dao.InstanceTypeDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/instanceType")
public class InstanceTypeService {
	private Logger logger = LoggerFactory.getLogger(InstanceTypeService.class);
	
	//auto-wired
	private InstanceTypeDAO instanceTypeDAO = null;
	
	public InstanceTypeDAO getInstanceTypeDAO() {
		return instanceTypeDAO;
	}

	@Autowired
	public void setInstanceTypeDAO(InstanceTypeDAO instanceTypeDAO) {
		this.instanceTypeDAO = instanceTypeDAO;
	}
	
	
	public InstanceTypeService() {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);	 
	}

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String findAllInstanceType() {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getInstanceTypeDAO().findAllInstanceTypes());
			logger.debug("Querying all instanceType resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("search")
	@Produces(MediaType.APPLICATION_JSON)
	public String findInstanceTypeWithParam(@QueryParam("region") String region) {
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getInstanceTypeDAO().findInstanceTypeByRegion(region));
			logger.debug("Querying instance types for region="+region+" resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
