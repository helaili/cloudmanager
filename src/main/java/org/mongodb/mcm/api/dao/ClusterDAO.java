package org.mongodb.mcm.api.dao;


import java.util.ArrayList;

import org.mongodb.mcm.api.DBWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.WriteResult;

@Repository
public class ClusterDAO {
	private static final String DB_COLLECTION_NAME = "cluster";
	
	private DBWrapper dbWrapper = null;
	
	public ClusterDAO() {
		super();
	}
	
	public DBWrapper getDbWrapper() {
		return dbWrapper;
	}

	@Autowired
	public void setDbWrapper(DBWrapper dbWrapper) {
		this.dbWrapper = dbWrapper;
	}


	public ArrayList<DBObject> findAllClusters() {
		DBCollection chateauCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		DBCursor cursor = chateauCollection.find();
		
		ArrayList<DBObject> dboarray = new ArrayList<DBObject>();
		
		while (cursor.hasNext()) {
			DBObject dbo = cursor.next();
			dboarray.add(dbo);
		}
    	
		return dboarray;
	}
	
	public DBObject findCluster(String cluster) {
		DBCollection clusterCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		BasicDBObject query = new BasicDBObject("_id", cluster);
		DBCursor cursor = clusterCollection.find(query);
		
	
		if (cursor.hasNext()) {
			return cursor.next();
		} else {
			return null;
		}
	}
	
	public WriteResult createCluster(String clusterName, String region, 
			String configServers, String configServersAmiList, String  configServersInstanceTypeList, 
			String  shards, String  replicationFactor, String mongodServersAmiList, String  mongodInstanceTypeList, 
			String mongos, String mongosServersAmiList, String mongosInstanceTypeList) {
		
		DBCollection clusterCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		DBObject obj = BasicDBObjectBuilder.start().add("name", clusterName).add("region", region).add("configServers", configServers).
				add("configServersAmiList", configServersAmiList).add("configServersInstanceTypeList", configServersInstanceTypeList).
				add("shards", shards).add("replicationFactor", replicationFactor).add("mongodServersAmiList", mongodServersAmiList).
				add("mongodInstanceTypeList", mongodInstanceTypeList).add("mongos", mongos).
				add("mongosServersAmiList", mongosServersAmiList).add("mongosInstanceTypeList", mongosInstanceTypeList).get();
		return clusterCollection.insert(obj);
	}
	

}
