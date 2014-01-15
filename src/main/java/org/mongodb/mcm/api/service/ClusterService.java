package org.mongodb.mcm.api.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.mongodb.mcm.api.dao.ClusterDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/cluster")
public class ClusterService {
	private Logger logger = LoggerFactory.getLogger(ClusterService.class);
	
	//auto-wired
	private ClusterDAO clusterDAO = null;
	
	public ClusterDAO getClusterDAO() {
		return clusterDAO;
	}

	@Autowired
	public void setClusterDAO(ClusterDAO clusterDAO) {
		this.clusterDAO = clusterDAO;
	}
	
	
	public ClusterService() {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);	 
	}

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String findAllCluster() {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getClusterDAO().findAllClusters());
			logger.debug("Querying all cluster resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("{cluster}")
	@Produces(MediaType.APPLICATION_JSON)
	public String findCluster(@PathParam("cluster") String cluster) {
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getClusterDAO().findCluster(cluster));
			logger.debug("Querying cluster="+cluster+" resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	public String createCluster(@QueryParam("clusterName") String clusterName, @QueryParam("region") String region, 
			@QueryParam("configServers") String configServers, @QueryParam("configServersAmiList") String configServersAmiList, @QueryParam("configServersInstanceTypeList") String configServersInstanceTypeList, 
			@QueryParam("shards") String  shards, @QueryParam("replicationFactor") String  replicationFactor, @QueryParam("mongodServersAmiList") String mongodServersAmiList, @QueryParam("mongodInstanceTypeList") String  mongodInstanceTypeList, 
			@QueryParam("mongos") String mongos, @QueryParam("mongosServersAmiList") String mongosServersAmiList, @QueryParam("mongosInstanceTypeList") String mongosInstanceTypeList) {
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			String result = mapper.writeValueAsString(getClusterDAO().createCluster(clusterName, region, 
					configServers, configServersAmiList,  configServersInstanceTypeList, 
					 shards,  replicationFactor, mongodServersAmiList,  mongodInstanceTypeList, 
					mongos, mongosServersAmiList, mongosInstanceTypeList));
			logger.debug("Creating cluster with name="+clusterName+" resulted in " + result);
			return result;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
