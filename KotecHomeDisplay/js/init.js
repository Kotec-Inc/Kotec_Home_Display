function initKotecAllApps(){
	this.jsonData = JSON.parse(jsonKotechomedisplay);	
}

initKotecAllApps.prototype.getData = function(){
	return this.jsonData.list;
}

initKotecAllApps.prototype.getCountApps = function(){
	return this.jsonData.list.length;
}