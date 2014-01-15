package org.mongodb.mcm.api.dao;


import java.util.ArrayList;

import org.mongodb.mcm.api.DBWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

@Repository
public class AmiDAO {
	private static final String DB_COLLECTION_NAME = "ami";
	//private Logger logger = LoggerFactory.getLogger(AmiDAO.class);
	
	private DBWrapper dbWrapper = null;
	
	public AmiDAO() {
		super();
	}
	
	public DBWrapper getDbWrapper() {
		return dbWrapper;
	}

	@Autowired
	public void setDbWrapper(DBWrapper dbWrapper) {
		this.dbWrapper = dbWrapper;
	}


	public ArrayList<DBObject> findAllAmis() {
		DBCollection amiCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		DBCursor cursor = amiCollection.find();
		
		ArrayList<DBObject> dboarray = new ArrayList<DBObject>();
		
		while (cursor.hasNext()) {
			DBObject dbo = cursor.next();
			dboarray.add(dbo);
		}
    	
		return dboarray;
	}
	
	
	public ArrayList<DBObject> findAmiNames() {
		DBCollection amiCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		BasicDBObject query = new BasicDBObject();
		BasicDBObject fields = new BasicDBObject("version", 0).append("_id", 0).append("region", 0);
		DBCursor cursor = amiCollection.find(query, fields);
		
	
		ArrayList<DBObject> dboarray = new ArrayList<DBObject>();
		
		while (cursor.hasNext()) {
			DBObject dbo = cursor.next();
			dboarray.add(dbo);
		}
    	
		return dboarray;
	}
	
	
	public ArrayList<DBObject> findAmiByRegion(String region) {
		DBCollection amiCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		BasicDBObject query = new BasicDBObject("region", region);
		BasicDBObject fields = new BasicDBObject("version", 0).append("region", 0);
		DBCursor cursor = amiCollection.find(query, fields);
		
	
		ArrayList<DBObject> dboarray = new ArrayList<DBObject>();
		
		while (cursor.hasNext()) {
			DBObject dbo = cursor.next();
			dboarray.add(dbo);
		}
    	
		return dboarray;
	}
	
	
	public DBObject findAmi(String ami) {
		DBCollection amiCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		BasicDBObject query = new BasicDBObject("_id", ami);
		DBCursor cursor = amiCollection.find(query);
		
	
		if (cursor.hasNext()) {
			return cursor.next();
		} else {
			return null;
		}
	}
	
}
