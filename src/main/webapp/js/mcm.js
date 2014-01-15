

function loadNavClusters() {
	deactivateAllNavs();
	$("#navClusters").addClass('active');
	$("#side-sub-nav").load("inc/clusters.html");
	loadClusters();
}


function loadNavSettings() {
	deactivateAllNavs();
	$("#navSettings").addClass('active');
	$("#side-sub-nav").load("inc/settings.html");
	loadAMISettings();
}


function deactivateAllNavs() {
	$("#navSettings").removeClass('active');
	$("#navClusters").removeClass('active');
	
}


function loadAMISettings() {
	$("#tab-content").load("inc/settings-ami.html");
	$("#setingsInstanceTypeLink").removeClass('active');
	$("#setingsAmiLink").addClass('active');
}

function loadInstanceTypeSettings() {
	$("#tab-content").load("inc/settings-instanceTypes.html");
	$("#setingsAmiLink").removeClass('active');
	$("#setingsInstanceTypeLink").addClass('active');
}


function loadClusters() {
	$("#tab-content").load("inc/clusters-clusters.html");
	$("#clustersHostsLink").removeClass('active');
	$("#clustersDatabasesLink").removeClass('active');
	$("#clustersClustersLink").addClass('active');
}

function loadDatabases() {
	$("#tab-content").load("inc/clusters-databases.html");
	$("#clustersHostsLink").removeClass('active');
	$("#clustersDatabasesLink").addClass('active');
	$("#clustersClustersLink").removeClass('active');
}

function loadHosts() {
	$("#tab-content").load("inc/clusters-hosts.html");
	$("#clustersHostsLink").addClass('active');
	$("#clustersDatabasesLink").removeClass('active');
	$("#clustersClustersLink").removeClass('active');
}

