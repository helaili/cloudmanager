package org.mongodb.mcm.api;

import java.net.UnknownHostException;

import com.mongodb.DB;
import com.mongodb.MongoClient;

public class DBWrapper {
	private String hostname;
	private int port;
	private String dbName;
	private MongoClient mongoClient;
	private DB db;
	
	public DBWrapper(String hostname, int port, String dbName, String username, String password) {
		super();
		this.hostname = hostname;
		this.port = port;
		this.dbName = dbName;
		try {
			mongoClient = new MongoClient(hostname, port);
			db = mongoClient.getDB(dbName);
			db.authenticate(username, password.toCharArray());
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		
	}

	public String getHostname() {
		return hostname;
	}

	public int getPort() {
		return port;
	}

	public String getDbName() {
		return dbName;
	}

	public MongoClient getMongoClient() {
		return mongoClient;
	}

	public DB getDb() {
		return db;
	}
	
}
