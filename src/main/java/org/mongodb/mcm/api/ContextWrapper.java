package org.mongodb.mcm.api;

import org.springframework.web.context.WebApplicationContext;

public class ContextWrapper {
	private static WebApplicationContext context = org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();

	
	public static WebApplicationContext getContext() 	{
		return context;
	}
}
