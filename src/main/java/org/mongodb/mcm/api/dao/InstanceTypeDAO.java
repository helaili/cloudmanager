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
public class InstanceTypeDAO {
	private static final String DB_COLLECTION_NAME = "instanceType";
	//private Logger logger = LoggerFactory.getLogger(AmiDAO.class);
	
	private DBWrapper dbWrapper = null;
	
	public InstanceTypeDAO() {
		super();
	}
	
	public DBWrapper getDbWrapper() {
		return dbWrapper;
	}

	@Autowired
	public void setDbWrapper(DBWrapper dbWrapper) {
		this.dbWrapper = dbWrapper;
	}


	public ArrayList<DBObject> findAllInstanceTypes() {
		DBCollection chateauCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		DBCursor cursor = chateauCollection.find();
		
		ArrayList<DBObject> dboarray = new ArrayList<DBObject>();
		
		while (cursor.hasNext()) {
			DBObject dbo = cursor.next();
			dboarray.add(dbo);
		}
    	
		return dboarray;
	}
	
	public ArrayList<DBObject> findInstanceTypeByRegion(String region) {
		DBCollection amiCollection = dbWrapper.getDb().getCollection(DB_COLLECTION_NAME);
		BasicDBObject query = new BasicDBObject("region", region);
		DBCursor cursor = amiCollection.find(query);
		
	
		ArrayList<DBObject> dboarray = new ArrayList<DBObject>();
		
		while (cursor.hasNext()) {
			DBObject dbo = cursor.next();
			dboarray.add(dbo);
		}
    	
		return dboarray;
	}
	
	

}
